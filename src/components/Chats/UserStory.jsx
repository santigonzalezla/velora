import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import User from '../../assets/img/HomeApp/Chats/User.png'
import React, { useState, useEffect } from 'react';
import socket from '../../utils/chatSocket';
import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

const cookies = new Cookies();
const token = cookies.get('auth-cookie');
const decode = token ? jwt(token) : null;

async function getChatSessions() {

  let url = null;
  if (decode.userType === 'artist') {
    url = `${import.meta.env.VITE_CHAT_API_URL}/chats/getArtistSessions`;
  } else {
    url = `${import.meta.env.VITE_CHAT_API_URL}/chats/getClientSessions`;
  }
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(url, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

async function getChatHistory(sessionId) {
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_CHAT_API_URL}/chats/getMessagesHistory/${sessionId}`, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

async function createMessage(receiver, message) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_CHAT_API_URL}/chats/sendMessage/${receiver}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "message": {
        "text": message,
        "status": 1
      },
      "token": token
    }),
    credentials: 'include'
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}


const UserStory = () => {

  const [chatSessions, setChatSessions] = useState([]);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [receiver, setReceiver] = useState(null);

  const chatCliked = (Id) => {
    getChatHistory(Id).then((data) => {
      if (decode.userType === "artista") {
        setReceiver(chatSessions.find(session => session.id === Id).client_id);
      } else {
        setReceiver(chatSessions.find(session => session.id === Id).artist_id);
      }
      setSessionId(Id);
      setChatHistory(data.chatHistory);
    });
  }

  const sendMessage = () => {
    createMessage(receiver, message).then((data) => {
      getChatHistory(sessionId).then((data) => {
        setChatHistory(data.chatHistory);
      });
    });
  }


  useEffect(() => {
    getChatSessions().then((data) => {
      setChatSessions(data.chatSessions);
    });

    socket.on('chatMessage', (msg) => {
      console.log(msg);
      if (!chatHistory.includes(msg)) {
        getChatHistory(sessionId).then((data) => {
          setChatHistory(data.chatHistory);
        });
      }
    });
  }, []);
  return (
    <div>
      <Image src={Logo} id={style.LogoChats} fluid />
      <input
        type="text"
        placeholder="Search"
        id={style.SerchUser}
      />
      {chatSessions.map((session, index) => (
        <section key={index} className={style.UserChatData} >
          <Image src={User} fluid className={style.UserPhoto} onClick={() => chatCliked(session.id, (decode.userType === "artista" ? session.client_id : session.artist_id))} />
          <div className={style.UserChatDataTxT}>
            <span>{decode.userType === "artista" ? session.client_id : session.artist_id}</span>
            <span>@{decode.userType === "artista" ? session.client_id : session.artist_id}</span>
          </div>
        </section>
      ))}
    </div>
  );
}

export default UserStory;
