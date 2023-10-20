import style from './ArtistApp.module.css'
import { Image, Row, Col, Container, Modal, Form, Tabs, Tab } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import SuggetionsArtist from '../SuggetionsArtist/SuggetionsArtist';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import AddMedia from '../../assets/img/ArtistApp/ArtistPorfile/addmedia.png'
import Premium from '../../assets/img/ArtistApp/ArtistPorfile/Premium.png'
import FeedArtist from '../FeedArtist/FeedArtist'
import Caledar from './Calendar';
import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

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

async function createPost(data) {
  const token = cookies.get('auth-cookie');
  const url = `${import.meta.env.VITE_POST_API_URL}/posts`;
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
                <div id={style.Coins}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#373B56" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.59387 12.0197C6.81751 12.3019 7.10563 12.5264 7.43402 12.6741C7.76242 12.8219 8.12148 12.8887 8.48105 12.8689H9.61336C10.1139 12.8689 10.5939 12.6701 10.9478 12.3162C11.3017 11.9622 11.5005 11.4822 11.5005 10.9817C11.5005 10.4812 11.3017 10.0012 10.9478 9.64728C10.5939 9.29336 10.1139 9.09453 9.61336 9.09453H8.38669C7.88618 9.09453 7.40617 8.89571 7.05225 8.54179C6.69834 8.18788 6.49951 7.70787 6.49951 7.20735C6.49951 6.70684 6.69834 6.22683 7.05225 5.87292C7.40617 5.519 7.88618 5.32018 8.38669 5.32018H9.519C10.3682 5.32018 10.9344 5.50889 11.4062 6.16941M8.95284 4.28223V13.7181" stroke="#373B56" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  <p>12k</p>
                </div>
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
                    <textarea className={style.PostInput} onChange={(e) => { setPostText(e.target.value) }} name="" id="" cols="30" rows="10"></textarea>
                    <Form.Select id={style.SelectView} defaultValue="" onChange={(e) => { setPostVisibility(e.target.value) }}>
                      <option value="" disabled hidden>¿Quién puede ver?</option>
                      <option value="public">Todos</option>
                      <option value="premium">Solo Clientes Premium</option>
                    </Form.Select>
                  </Modal.Body>
                  <Modal.Footer id={style.modalFooter}>
                    <input type="file" ref={addImageButton} hidden multiple onChange={(e) => { setPostImages(e.target.files) }} />
                    <img src={AddMedia} width={20} onClick={handleAddImage} />
                    <span>image.png</span>
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
            <Tabs id={style.Navies} defaultActiveKey="FEED">
              <Tab eventKey="FEED" title="FEED">
                <FeedArtist />
              </Tab>
              <Tab eventKey="PREMIUM" title="PREMIUM">
                <Row className={style.Premium}>
                  <Col sm='3' className={style.Premium}>
                    <img src={Premium} alt="" width={150} />
                  </Col>
                  <Col sm='3' className={style.Premium}>
                    <img src={Premium} alt="" width={150} />
                  </Col>
                  <Col sm='3' className={style.Premium}>
                    <img src={Premium} alt="" width={150} />
                  </Col>
                  <Col sm='3' className={style.Premium}>
                    <img src={Premium} alt="" width={150} />
                  </Col>
                </Row>
              </Tab>
              <Tab id={style.RoomBtn} eventKey="ROOM ME" title="ROOM ME">
                <Row>
                  <Col sm='5'>
                    <Caledar />
                    <section id={style.Locations}>
                      <article>
                        <h6>Actividades de preferencia</h6>
                      </article>
                      <Row>
                        <Col id={style.LocationData1}>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                        </Col>
                        <Col id={style.LocationData2}>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                        </Col>
                      </Row>
                      <div id={style.AddAction}>
                        <span>Añadir </span>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 0C4.19368 0 0.5 3.69368 0.5 8.25C0.5 12.8066 4.19368 16.5 8.75 16.5C13.3066 16.5 17 12.8066 17 8.25C17 3.69368 13.3066 0 8.75 0ZM8.75 15.485C4.76963 15.485 1.53125 12.2304 1.53125 8.24997C1.53125 4.2696 4.76963 1.03122 8.75 1.03122C12.7304 1.03122 15.9688 4.26962 15.9688 8.24997C15.9688 12.2303 12.7304 15.485 8.75 15.485ZM12.3594 7.73438H9.26562V4.64062C9.26562 4.356 9.03463 4.125 8.75 4.125C8.46537 4.125 8.23438 4.356 8.23438 4.64062V7.73438H5.14062C4.856 7.73438 4.625 7.96537 4.625 8.25C4.625 8.53463 4.856 8.76562 5.14062 8.76562H8.23438V11.8594C8.23438 12.144 8.46537 12.375 8.75 12.375C9.03463 12.375 9.26562 12.144 9.26562 11.8594V8.76562H12.3594C12.644 8.76562 12.875 8.53463 12.875 8.25C12.875 7.96537 12.644 7.73438 12.3594 7.73438Z" fill="#A000FF" /></svg>
                      </div>
                    </section>
                  </Col>
                  <Col>
                    <section id={style.Dates}>
                      <div>
                        <p>Cita virtual con @usuariocliente 11:00 am</p>
                        <span>bit.ly/3253</span>
                      </div>
                      <div>
                        <p>Cita virtual con @usuariocliente 11:00 am</p>
                        <span>bit.ly/3253</span>
                      </div>
                      <div>
                        <p>Cita virtual con @usuariocliente 11:00 am</p>
                        <span>bit.ly/3253</span>
                      </div>
                      <div>
                        <p>Cita virtual con @usuariocliente 11:00 am</p>
                        <span>bit.ly/3253</span>
                      </div>
                    </section>
                    <section id={style.Locations}>
                      <article>
                        <h6>lugares de preferencia</h6>
                        <div>
                          <span>Añadir </span>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 0C4.19368 0 0.5 3.69368 0.5 8.25C0.5 12.8066 4.19368 16.5 8.75 16.5C13.3066 16.5 17 12.8066 17 8.25C17 3.69368 13.3066 0 8.75 0ZM8.75 15.485C4.76963 15.485 1.53125 12.2304 1.53125 8.24997C1.53125 4.2696 4.76963 1.03122 8.75 1.03122C12.7304 1.03122 15.9688 4.26962 15.9688 8.24997C15.9688 12.2303 12.7304 15.485 8.75 15.485ZM12.3594 7.73438H9.26562V4.64062C9.26562 4.356 9.03463 4.125 8.75 4.125C8.46537 4.125 8.23438 4.356 8.23438 4.64062V7.73438H5.14062C4.856 7.73438 4.625 7.96537 4.625 8.25C4.625 8.53463 4.856 8.76562 5.14062 8.76562H8.23438V11.8594C8.23438 12.144 8.46537 12.375 8.75 12.375C9.03463 12.375 9.26562 12.144 9.26562 11.8594V8.76562H12.3594C12.644 8.76562 12.875 8.53463 12.875 8.25C12.875 7.96537 12.644 7.73438 12.3594 7.73438Z" fill="#A000FF" /></svg>
                        </div>
                      </article>
                      <Row>
                        <Col id={style.LocationData1}>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                        </Col>
                        <Col id={style.LocationData2}>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                          <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_762_3971)"><path d="M9.41667 17.7708V21.8958M9.41667 17.7708C9.41667 14.1042 12.3198 8.782 15.8911 5.80558L17.2083 4.70833V4.47917H12.6498M9.41667 17.7708C9.41667 14.1042 6.51358 8.782 2.94225 5.80558L1.625 4.70833V4.47917H12.6498M9.41667 21.8958H4.83333M9.41667 21.8958H14M12.6498 4.47917C12.7382 3.68783 13.0538 2.93901 13.5585 2.3231C14.0632 1.70719 14.7353 1.2505 15.4938 1.00817C16.2523 0.765838 17.0647 0.748216 17.833 0.95743C18.6013 1.16665 19.2926 1.59375 19.8235 2.1872C20.3544 2.78066 20.7022 3.51508 20.8249 4.30184C20.9476 5.08859 20.84 5.89405 20.515 6.62098C20.1901 7.34792 19.6617 7.96526 18.9936 8.3985C18.3255 8.83174 17.5463 9.06235 16.75 9.0625M5.29167 8.14583H13.5417" stroke="#373B56" /></g><defs><clipPath id="clip0_762_3971"><rect width="22" height="22" fill="white" transform="translate(0.25 0.354492)" /></clipPath></defs></svg>
                            <p>jojoono</p>
                          </div>
                        </Col>
                      </Row>
                    </section>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
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