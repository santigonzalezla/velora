import style from './ArtistApp.module.css'
import { Image, Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Banner from '../../assets/img/ArtistApp/ClientPorfile/banner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import Star2 from '../../assets/img/ArtistApp/ClientPorfile/star2.png'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import SuggetionsArtist from '../SuggetionsArtist/SuggetionsArtist';

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

const ClientPorfile = () => {

  const [first_name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const loadProfile = async () => {
    getUserInfo().then((data) => {
      setName(data.first_name);
      setCountry(data.country);
      setLastname(data.last_name);
      setUsername(data.username);
      setBio(data.bio || "Biografia");
    });
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
                <span id={style.LocationTxt} ><img src={Location} id={style.Location} />{country}</span>
              </section>
              <section id={style.BtnOptions}>
                <Image src={Block} id={style.Block} fluid />
                <div id={style.msgBtn}>
                  Mensaje
                </div>
              </section>
            </div>
            <div className={style.porfilUser}>
              <h5>{first_name + " " + lastname}</h5>
              <span id={style.atSign}>@{username}</span>
              <section id={style.Review}>
                <span className={style.Nums}>4.3 <img src={Star} width={15} alt="" /><span id={style.Rev}><span> 52K</span> RESEÑAS</span></span>
              </section>
            </div>
            <div>
              <h5 id={style.ReviewTitle}>RESEÑAS</h5>
            </div>
            <section>
              <article id={style.newReview}>
                <div className={style.StarsReview}>
                  <img src={Star2} alt="" />
                  <img src={Star2} alt="" />
                  <img src={Star2} alt="" />
                  <img src={Star2} alt="" />
                  <img src={Star2} alt="" />
                </div>
                <input type="text" id={style.inputReview} />
              </article>
              <article id={style.historyReview}>
                <div className={style.itemReview}>
                  <h5>4.3</h5>
                  <div>
                    <div className={style.StarsReview}>
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                    </div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
                  </div>
                </div>
                <div className={style.itemReview}>
                  <h5>4.3</h5>
                  <div>
                    <div className={style.StarsReview}>
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                    </div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
                  </div>
                </div>
                <div className={style.itemReview}>
                  <h5>4.3</h5>
                  <div>
                    <div className={style.StarsReview}>
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                    </div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
                  </div>
                </div>
                <div className={style.itemReview}>
                  <h5>4.3</h5>
                  <div>
                    <div className={style.StarsReview}>
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                    </div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
                  </div>
                </div>
                <div className={style.itemReview}>
                  <h5>4.3</h5>
                  <div>
                    <div className={style.StarsReview}>
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                    </div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
                  </div>
                </div>
                <div className={style.itemReview}>
                  <h5>4.3</h5>
                  <div>
                    <div className={style.StarsReview}>
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                      <img src={Star2} alt="" />
                    </div>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
                  </div>
                </div>
              </article>
            </section>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3" className={style.SuggetionsBar}>
            <SuggetionsArtist />
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default ClientPorfile;