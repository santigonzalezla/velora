import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap'
import LogoSide from '../../assets/img/HomeApp/Feed/logoside.png'
import userPhoto from '../../assets/img/HomeApp/Feed/userPhoto.png'
import commentReaction from '../../assets/img/HomeApp/Feed/commentReaction.png'
import heartReaction from '../../assets/img/HomeApp/Feed/heartReaction.png'
import donationReaction from '../../assets/img/HomeApp/Feed/donationReaction.png'
import Post from './Post'
import { Cookies } from 'react-cookie'
import { useState } from 'react';

const cookies = new Cookies();

async function getUserPosts(username) {
  const token = cookies.get('auth-cookie');
  const url = `https://www.veloraroom.com/post/api/posts/${username}`;
  const options = {
    headers: {
      credetials: 'include',
      'Authorization': 'Bearer ' + (token || '')
    }
  };
  const response = await fetch(url, options);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

async function getUserInfo(username) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/profile/${username}`, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

const Feed = () => {
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    console.log(searchValue.startsWith('@'));
    if (searchValue.startsWith('@')) {
      setLoadingSearch(true);
      getUserPosts(searchValue.slice(1)).then((data) => {
        getUserInfo(searchValue.slice(1)).then((user) => {
          const tempData = data.data.map((post) => [user.first_name + " " + user.last_name, post])
          console.log(tempData);
          setPosts(tempData);
          setLoadingSearch(false);
        });      
      });
    }
  }

  return (
    <main id={style.Feed}>
      <div>
        < Image src={LogoSide} alt="" id={style.LogoSide} fluid />
        <form onSubmit={handleSearch}>
          <input type="text" id={style.FeedInput} disabled={loadingSearch} placeholder='@username' />
        </form>
      </div>
      
      {
        posts.map((post, index) => (
          <Post key={index} artistUsername={post[1].creator_id} artistName={post[0]} postImages={post[1].media} postText={post[1].text}/>
        ))
      }
    </main>
  );
}

export default Feed;
