import style from './HomeApp.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Row, Col, Nav, Container, Modal } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Suggetions from '../Suggetions/Suggetions';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import NotSubscribed from './NotSubscribed/NotSubscribed';
import Subscribed from './Subscribed/Subscried';
import Feed from '../Feed/Feed'
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

const ViewArtist = () => {
  const { username } = useParams();

  const [first_name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  //Modal para subscribirse al artista
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Modal comprar subscripcion
  const [buySubs, setBuySubs] = useState(false);
  const buySubsClose = () => setBuySubs(false);
  //Al abrir el modar para comprar subscripcion se cierra el primer modal
  const buySubsShow = () => {
    setBuySubs(true);
    setShow(false);
  }
  //Modal con requisito de estar subscrito
  // const [reqSubs, setReqSubs] = useState(false);
  // const reqSubsClose = setReqSubs(false)
  // const reqSubsShow = setReqSubs(true);

  const loadProfile = async () => {
    getUserInfo(username).then((data) => {
      setName(data.first_name);
      setCountry(data.country);
      setLastname(data.last_name);
      setBio(data.bio || "Biografia");
    });
  }

  useEffect(() => {
    loadProfile()
  }, []);

  return (
    <div id={style.ViewArtist}>
      <SideBar />
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
                  Mensaje
                </div>
                <div id={style.subBtn} onClick={handleShow}>
                  Subscríbete
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Image src={Banner} className={style.ArtistBanner} fluid />
                  <div className={style.UserData}>
                    <section>
                      <Image src={Photo} className={style.ArtistPhoto} fluid />
                    </section>
                  </div>
                  <div className={style.subsData}>
                    <center><p><span>Al suscribirte tendrás acceso a :</span></p></center>
                    <p>Acceso A emisiones en vivo   </p>
                    <p>Chat: Mensaje directo con este usuario</p>
                    <p>contenido  premium:   publicaciones del artista y peticiones de contenido exclusivo</p>
                    <p>Servicio Room me: Agendamiento de encuentros virtuales o presenciales con el artista</p>
                    <center>
                      <div id={style.subBtnData} onClick={buySubsShow}>COMPRAR SUSCRIPCIÓN</div>
                    </center>
                  </div>
                </Modal>
                <Modal show={buySubs} onHide={buySubsClose} id={style.buySubsModal}>
                  <Modal.Header className={style.buySubsModalHeader}>
                    <p>Suscríbete por solo</p>
                  </Modal.Header>
                  <Modal.Body className={style.buySubsModalBody}>
                    <center>
                      <h3>8 USD/mes</h3>
                      <div id={style.subBtnData} onClick={buySubsShow}>COMPRAR SUSCRIPCIÓN</div>
                    </center>
                  </Modal.Body>
                  <Modal.Footer className={style.buySubsModalFooter}>
                    <span>12 créditos disponibles</span>
                    <p>comprar créditos</p>
                  </Modal.Footer>
                </Modal>
              </section>
            </div>
            {/* Dision de secciones */}
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
            <div>
              {/* 

              Componente para personas que no estan subscritas
              <NotSubscribed />

   */}
              <Subscribed />
            </div>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3" className={style.SuggetionsBar}>
            <Suggetions />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewArtist;
