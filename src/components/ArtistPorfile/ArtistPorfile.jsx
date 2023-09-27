import style from './ArtistApp.module.css'
import { Image, Row, Col, Nav, Container, Modal, Form } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import SuggetionsArtist from '../SuggetionsArtist/SuggetionsArtist';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import AddMedia from '../../assets/img/ArtistApp/ArtistPorfile/addmedia.png'
import FeedArtist from '../FeedArtist/FeedArtist'

import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

const apiURL = import.meta.env.VITE_AUTH_API_URL;
const cookies = new Cookies();

async function getUserInfo() {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const decoded = jwt(token);
  const response = await fetch(`${apiURL}/profile/${decoded.username}`, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

async function createPost(data) {
  const token = cookies.get('auth-cookie');
  const url = `http://localhost:9000/api/posts`;
  const options = {
    credetials: 'include',
    headers: {
      'Authorization': 'Bearer ' + (token || '')
    },
    method: 'POST',
    body: data
  };
  const response = await fetch(url, options);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}


const ArtistPorfile = () => {
  const [show, setShow] = useState(false);
  const [first_name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const [postText, setPostText] = useState('');
  const [postImages, setPostImages] = useState(null);
  const [postVisibility, setPostVisibility] = useState('public');

  const [posts, setPosts] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addImageButton = useRef(null);

  const loadProfile = async () => {
    getUserInfo().then((data) => {
      setName(data.first_name);
      setCountry(data.country);
      setLastname(data.last_name);
      setUsername(data.username);
      setBio(data.bio || "Biografia");
    });
  }

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('text', postText);
    if (postImages) {
      for (let i = 0; i < postImages.length; i++) {
        data.append('media', postImages[i]);
      }
    }

    //data.append('media', postImages);
    data.append('privacy', postVisibility);
    for (const value of data.values()) {
      console.log(value);
    }
    handleClose();
    const response = await createPost(data); 
    window.location.reload();
    
  }

  const handleAddImage = () => {
    addImageButton.current.click();
  }


  useEffect(() => {
    loadProfile()
  }, []);

  return (
    <div id={style.ViewArtist}>
      <SideBarArtist />
      <Container id={style.ViewArtistCol} fluid>
        <Row>
          <Col xs="12" sm="8" md="8" lg="8" id={style.ViewArtistContent}>
            <Image src={Banner} className={style.ArtistBanner} fluid />
            <div className={style.UserData}>
              <section>
                <Image src={Photo} className={style.ArtistPhoto} fluid />
                <span id={style.LocationTxt} ><img src={Location} id={style.Location} /> COLOMBIA</span>
              </section>
              <section id={style.BtnOptions}>
                <Image src={Block} id={style.Block} fluid />
                <div id={style.msgBtn}>
                  Go Live
                </div>
                <button id={style.msgBtn} onClick={handleShow}>
                  New Post
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className={style.PostTittle}>Nueva publicación</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input className={style.PostInput} onChange={(e) => { setPostText(e.target.value) }} />
                    <Form.Select id={style.SelectView} defaultValue="" onChange={(e) => { setPostVisibility(e.target.value) }}>
                      <option value="" disabled hidden>¿Quién puede ver?</option>
                      <option value="public">Todos</option>
                      <option value="premium">Solo Clientes Premium</option>
                    </Form.Select>
                  </Modal.Body>
                  <Modal.Footer id={style.modalFooter}>
                    <input type="file" ref={addImageButton} hidden multiple onChange={(e) => { setPostImages(e.target.files) }} />
                    <img src={AddMedia} width={20} onClick={handleAddImage} />
                    <p onClick={handleCreatePost}>Publicar</p>
                  </Modal.Footer>
                </Modal>

              </section>
            </div>
            <div className={style.porfilUser}>
              <h5>{first_name + " " + lastname}</h5>
              <span id={style.atSign}>@{username}</span>
              <span>{country}</span>
              <span>{bio}</span>
              <section id={style.Review}>
                <span id={style.Subs}><span className={style.Nums} >53K</span> SUBSCRIPCIONES</span>
                <span className={style.Nums}>4.3 <img src={Star} width={15} alt="" /><span id={style.Rev}><span> 52K</span> RESEÑAS</span></span>
              </section>
            </div>
            <Nav id={style.Navies}>
              <Nav.Link>FEED</Nav.Link>
              <Nav.Link>PREMIUM</Nav.Link>
              <Nav.Link id={style.RoomBtn}>ROOM ME</Nav.Link>
            </Nav>
            <FeedArtist />
          </Col>
          <Col xs="12" sm="3" md="3" lg="3" className={style.SuggetionsBar}>
            <SuggetionsArtist />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArtistPorfile;