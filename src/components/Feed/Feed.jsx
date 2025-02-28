import style from './HomeApp.module.css'
import { Image, Row, Col, Container } from 'react-bootstrap'
import LogoSide from '../../assets/img/HomeApp/Feed/logoside.png'
import userPhoto from '../../assets/img/HomeApp/Feed/userPhoto.png'
import Post from './Post'
import { Cookies } from 'react-cookie'
import { useEffect, useState, useRef } from 'react';
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

async function getAllPublicPosts() {
  const token = cookies.get('auth-cookie');
  const url = `http://localhost:9000/api/getAllPosts`;
  const options = {
    headers: {
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

const Feed = (props) => {
  const { artistView, artist } = props;
  const username = jwt(cookies.get('auth-cookie')).username;
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [posts, setPosts] = useState([]);
  const [subArtists, setSubArtists] = useState(null);
  const [publicPost, setPublicPost] = useState(null);

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
            console.log(data);
          });
        } else {
          getUserInfo(searchValue.slice(1)).then((user) => {
            const temp1 = publicPost.filter((post) => post.creator_id === searchValue.slice(1));
            const temp2 = temp1.map((post) => [user.first_name + " " + user.last_name, post])
            console.log(temp2);
            setPosts(temp2);
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
    async function getPublicPosts() {
      const posts = await getAllPublicPosts();
      setPublicPost(posts.data);
      console.log(posts.data, 'public posts');
    }
    getPublicPosts();

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

  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const handleBlur = (event) => {
    // Lógica a realizar cuando el campo de entrada pierde el foco
    console.log('Campo de entrada perdió el foco. Valor actual:', event.target.value);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      // El clic ocurrió fuera del campo de entrada
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    // Agregar event listener para el clic cuando el componente se monta
    document.addEventListener('click', handleClickOutside);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // [] asegura que este efecto se ejecute solo una vez al montar el componente

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Lógica para generar sugerencias de búsqueda basadas en el valor del campo de entrada

    setShowSuggestions(true); // Mostrar las sugerencias cuando el usuario escribe algo
  };
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const batchSize = 10; // Número de publicaciones para cargar por lote
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 &&
        !loadingMore
      ) {
        // El usuario ha llegado al final de la página y no se están cargando más publicaciones
        setLoadingMore(true);
        const loadMorePosts = async () => {
          // Lógica para cargar más publicaciones, por ejemplo, llamando a tu función getPosts()
          const newPosts = await getPosts([...artistArray]); // Asegúrate de pasar la lista correcta de artistas
          setLoadedPosts(prevPosts => [...prevPosts, ...newPosts]);
          setLoadingMore(false);
        };
        loadMorePosts();
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadingMore]);

  return (
    <main >
      {!artistView &&
        <Container id={style.Feed} fluid>
          <Row>
            <Col className={style.ColItem} sm='4'>
              <article>
                < Image src={LogoSide} alt="" id={style.LogoSide} />
              </article>
            </Col>
            <Col className={style.ColItem} sm='7'>
              <div onSubmit={handleSearch} id={style.FeedInput} ref={inputRef}>
                <input
                  type="text"
                  disabled={loadingSearch}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleBlur} placeholder='@username' />
                {showSuggestions && (
                  <ul id={style.suggestionsBar}>
                    {/* Lógica para mostrar las sugerencias */}
                    <li className={style.suggestionsItem}>
                      <img src={userPhoto} alt="" />
                      <div>
                        <p>Beautiful Mouse</p>
                        <span>@beautifulmouse112</span>
                      </div>
                    </li>
                    <li className={style.suggestionsItem}>
                      <img src={userPhoto} alt="" />
                      <div>
                        <p>Beautiful Mouse</p>
                        <span>@beautifulmouse112</span>
                      </div>
                    </li>
                    <li className={style.suggestionsItem}>
                      <img src={userPhoto} alt="" />
                      <div>
                        <p>Beautiful Mouse</p>
                        <span>@beautifulmouse112</span>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </Col>
          </Row>
        </Container>
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