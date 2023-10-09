import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap'
import LogoSide from '../../assets/img/HomeApp/Feed/logoside.png'
import userPhoto from '../../assets/img/HomeApp/Feed/userPhoto.png'
import commentReaction from '../../assets/img/HomeApp/Feed/commentReaction.png'
import heartReaction from '../../assets/img/HomeApp/Feed/heartReaction.png'
import donationReaction from '../../assets/img/HomeApp/Feed/donationReaction.png'
import Post from './Post'
import { Cookies } from 'react-cookie'
import { useEffect, useState } from 'react';
import jwt from 'jwt-decode'

const cookies = new Cookies();

async function getUserPosts(username) {
  const token = cookies.get('auth-cookie');
  const url = `http://localhost:9000/api/posts/${username}`;
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

async function verifySubscription(username, artist) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_INTERACTIONS_URL}/follow/verify`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "follower": username,
      "artist": artist
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

async function getSubArtists(username) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_INTERACTIONS_URL}/follow/service/followedArtist/${username}`, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

async function likePost(postId) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_POST_API_URL}/posts/${postId}/likes`, {
    method: 'POST',
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

const Feed = (props) => {
  const { artistView, artist } = props;
  const username = jwt(cookies.get('auth-cookie')).username;
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [posts, setPosts] = useState([]);
  const [subArtists, setSubArtists] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    console.log(searchValue.startsWith('@'));
    if (searchValue.startsWith('@')) {
      setLoadingSearch(true);
      verifySubscription(username, searchValue.slice(1)).then((data) => {
        console.log(data)
        if (data.isFollower) {
          getPosts([searchValue.slice(1)]).then((data) => {
            setPosts(data);
          });
        }
        setLoadingSearch(false);
      });
    }
  }


  const getPosts = async (artist) => {
    let temp = [];
    for (let i = 0; i < artist.length; i++) {
      console.log(artist[i]);
      const posts = await getUserPosts(artist[i]);
      const user = await getUserInfo(artist[i]);
      temp = temp.concat(posts.data.map((post) => [user.first_name + " " + user.last_name, post]));
    }
    temp.sort((a, b) => {
      const dateA = new Date(a[1].creation_date);
      const dateB = new Date(b[1].creation_date);
      return dateB - dateA;  // Orden descendente
    });

    return temp;
  }

  const handleLike = (postId) => {
    likePost(postId).then((data) => {
      console.log(data);
    });
  }


  useEffect(() => {
    if (artistView) {
      getPosts([artist]).then((data) => {
        setPosts(data);
      });
    } else {
      getSubArtists(username).then((data) => {
        setSubArtists(data);
        getPosts(data).then((data) => {
          setPosts(data);
        });
      });
    }
  }, []);

  return (
    <main id={style.Feed}>
      { !artistView &&
        <div>
        < Image src={LogoSide} alt="" id={style.LogoSide} fluid />
        <form onSubmit={handleSearch}>
          <input type="text" id={style.FeedInput} disabled={loadingSearch} placeholder='@username' />
        </form>
      </div>
      }

      {
        posts.map((post, index) => (
          <Post key={index} postId={post[1].id} artistUsername={post[1].creator_id} artistName={post[0]} postImages={post[1].media} postText={post[1].text} handleLike={handleLike} />
        ))
      }
    </main>
  );
}

export default Feed;
