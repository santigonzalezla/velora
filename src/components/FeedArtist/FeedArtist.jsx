import style from './ArtistApp.module.css'
import Post from './Post';
import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

const apiURL = import.meta.env.VITE_AUTH_API_URL;

const cookies = new Cookies();

const getPosts = async () => {
  const token = cookies.get('auth-cookie');
  const response = await fetch(`${apiURL}/posts/${jwt(token).username}/1}`);
  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

const FeedArtist = () => {
  return (
    <main id={style.Feed}>
      <Post />
    </main >
  );
}

export default FeedArtist;
