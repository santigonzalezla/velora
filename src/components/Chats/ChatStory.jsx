import SideBar from '../SideBar/SideBar';
import style from './HomeApp.module.css'
import { Col, Row, Image, Container, Form } from 'react-bootstrap';
import More from '../../assets/img/HomeApp/Chats/More.png'
import Video from '../../assets/img/HomeApp/Chats/Video.png'
import Send from '../../assets/img/HomeApp/Chats/Send.png'
import React, { useState, useEffect } from 'react';
import socket from '../../utils/chatSocket';
import { Cookies } from 'react-cookie'
import UserStory from './UserStory';
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

const ChatStory = () => {
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
    <div id={style.ArtistChatStory}>
      <article>
        {chatHistory.map((message, index) => {
          if (message.sender_id === decode.username) {
            return (
              <section key={index} className={style.MyUser}>
                <div className={style.chatBubble2}>
                  <p>{message.text}</p>
                </div>
              </section>
            )
          } else {
            return (
              <section key={index} className={style.OtherUser}>
                <div className={style.chatBubble1}>
                  <p>{message.text}</p>
                </div>
              </section>
            )
          }
        }
        )}
      </article>
      <form className={style.SendMsg}>
        <Image src={Video} className={style.SendIcons} />
        <Image src={More} className={style.SendIcons} />
        <input
          type="text"
          id={style.Send}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Image src={Send} className={style.SendIcons} onClick={() => sendMessage()} />
      </form>
    </div>
  );
}

export default ChatStory;
