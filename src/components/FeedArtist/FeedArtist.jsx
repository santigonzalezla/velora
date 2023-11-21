import style from './ArtistApp.module.css'
import Post from '../Feed/Post';
import {Cookies} from 'react-cookie'
import jwt from 'jwt-decode'
import {useEffect, useState} from 'react';

const cookies = new Cookies();

async function getUserInfo() {
    const token = cookies.get('auth-cookie');
    const headers = {
        'Authorization': 'Bearer ' + (token || '')
    };
    const decoded = jwt(token);
    const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/profile/${decoded.username}`, {
        headers
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        return null;
    }
}

async function getPosts() {
    const token = cookies.get('auth-cookie');
    const url = `${import.meta.env.VITE_POST_API_URL}/posts/${jwt(token).username}`;
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

const FeedArtist = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {

        getPosts().then((data) => {
            getUserInfo().then((user) => {
                const tempData = data.data.map((post) => [user.first_name + " " + user.last_name, post])
                console.log(tempData);
                setPosts(tempData);
            });
        });
    }, []);

    return (
        <main id={style.Feed}>
            {
                posts.map((post, index) => (
                    <Post key={index} artistUsername={post[1].creator_id} artistName={post[0]}
                          postImages={post[1].media} postText={post[1].text}/>
                ))
            }

        </main>
    );
}

export default FeedArtist;
