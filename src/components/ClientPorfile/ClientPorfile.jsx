import style from './ArtistApp.module.css'
import { Image, Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Banner from '../../assets/img/ArtistApp/ClientPorfile/banner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import Star2 from '../../assets/img/ArtistApp/ClientPorfile/star2.png'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import SuggetionsArtist from '../SuggetionsArtist/SuggetionsArtist';
import { FaStar } from 'react-icons/fa';
import Review from './review';
import jwt from 'jwt-decode'

import { Cookies } from 'react-cookie'

const cookies = new Cookies();

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

async function getReviews(username) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_INTERACTIONS_URL}/client_rating/view/${username}`, {
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
  const navigate = useNavigate();
  const { user } = useParams();
  const [first_name, setName] = useState('');
  const [username, setUsername] = useState(user);
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  const loadProfile = async () => {
    getUserInfo(user).then((data) => {
      setName(data.first_name);
      setCountry(data.country);
      setLastname(data.last_name);
      setUsername(data.username);
      setBio(data.bio || "Biografia");
    });
    getReviews(user).then((data) => {
      setReviews(data);
      setAverageRating(data.reduce((acc, review) => acc + parseFloat(review.stars), 0) / data.length);
    });
  }

  useEffect(() => {
    loadProfile();
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
                <Image src={Photo} className={style.ArtistPhoto} fluid/>
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
                <span className={style.Nums}>{averageRating ? averageRating : 5}
                  <FaStar size={20} />
                  <span id={style.Rev}>
                    <span> {reviews ? reviews.length : 0}</span> RESEÑAS
                  </span>
                </span>
              </section>
            </div>
            <div>
              <h5 id={style.ReviewTitle}>RESEÑAS</h5>
            </div>
            <section>
              <article id={style.newReview}>
                <div className={style.StarsReview}>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={i}>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar
                          size={20}
                          className='star'
                          color={ratingValue <= (hover || rating) ? "" : "#e4e5e9"}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    )
                  })}
                </div>
                <input type="text" id={style.inputReview} />
              </article>
              <article id={style.historyReview}>
                {reviews && reviews.map((review, index) => (
                  <Review key={index} rater_id={review.rater_id} stars={review.stars} review={review.review} />
                ))}
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