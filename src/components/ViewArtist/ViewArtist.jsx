import style from './HomeApp.module.css'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Image, Row, Col, Container, Modal } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Suggetions from '../Suggetions/Suggetions';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import NotSubscribed from './NotSubscribed/NotSubscribed';
import Subscribed from './Subscribed/Subscried';
import BlockUser from './BlockUser/BlockUser';
import { Cookies } from 'react-cookie'
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode'

const cookies = new Cookies();

async function getUserInfo(artist) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/profile/${artist}`, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

async function getSubscriptionInfo(artist) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_INTERACTIONS_URL}/follow/serviceInfo/${artist}`, {
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

async function getCoinBalance() {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_INTERACTIONS_URL}/coin`, {
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

async function suscribeToArtist(serviceId) {
  const token = cookies.get('auth-cookie');
  const url = `${import.meta.env.VITE_INTERACTIONS_URL}/follow`;
  const options = {
    credetials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + (token || '')
    },
    method: 'POST',
    body: JSON.stringify({ serviceId })
  };
  const response = await fetch(url, options);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

async function unSuscribeToArtist(clientId, serviceId) {
  const token = cookies.get('auth-cookie');
  const url = `${import.meta.env.VITE_INTERACTIONS_URL}/unfollow`;
  const options = {
    credetials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + (token || '')
    },
    method: 'POST',
    body: JSON.stringify({ clientId, serviceId })
  };
  const response = await fetch(url, options);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

const ViewArtist = () => {
  const navigate = useNavigate();
  const { artist } = useParams();
  const username = jwt(cookies.get('auth-cookie')).username;
  const [sub, setSub] = useState(false);
  const [first_name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [susbcriptionInfo, setSusbcriptionInfo] = useState(null);
  const [coinBalance, setCoinBalance] = useState(null);
  const [reviews, setReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  //Modal para subscribirse al artista
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!sub) {
      setShow(true);
    } else {
      unSuscribe();
    }
  }
  //Modal comprar subscripcion
  const [buySubs, setBuySubs] = useState(false);
  const buySubsClose = () => setBuySubs(false);
  //Al abrir el modar para comprar subscripcion se cierra el primer modal
  const buySubsShow = () => {
    setBuySubs(true);
    setShow(false);
  }
  // Modal para confirmar subscripcion
  const [confirmSubsModal, setConfirmSubsModal] = useState(false);
  const confirmSubsModalClose = () => setConfirmSubsModal(false)
  const confirmSubsModalShow = () => {
    setBuySubs(false)
    setConfirmSubsModal(true)
  }
  const [unSuscribeModal, setUnSuscribeModal] = useState(false);
  const unSubcribeModalClose = () => setUnSuscribeModal(false)
  const unSubcribeModalShow = () => setUnSuscribeModal(true);
  // Modal para bloquear al artista
  const [block, setBlock] = useState(false)
  const blockClose = () => setBlock(false)
  const blockShow = () => setBlock(true)
  // Modal para desbloquear al artista
  const [unBlock, setUnBlock] = useState(false)
  const unBlockClose = () => setUnBlock(false)
  const unBlockShow = () => setUnBlock(true)
  // Modal para personas que no cuentan con el saldo suficiente de creditos para subscribirse al artista
  const [buyCredits, setBuyCredits] = useState(false)
  const buyCreditsClose = () => setBuyCredits(false)
  const buyCreditsShow = () => {
    setConfirmSubsModal(false),
      setBuyCredits(true)
  }
  // const unBlockShow = () => setUnBlock(true)
  //Modal con requisito de estar subscrito
  // const [reqSubs, setReqSubs] = useState(false);
  // const reqSubsClose = setReqSubs(false)
  // const reqSubsShow = setReqSubs(true);
  // const [confirmSubs, setConfirmSubs] = useState(false);
  // const confirmSubsCs = () => setConfirmSubs(false);
  // const confirmSubsOp = () => setConfirmSubs(true);

  // Modal de confirmacion al des subscribirse
  const [confirmUnSubsModal, setConfirmUnSubsModal] = useState(false)
  const confirmUnSubsModalClose = () => setConfirmUnSubsModal(false)
  const confirmUnSubsModalShow = () => {
    setConfirmUnSubsModal(true)
  }

  const loadData = async () => {
    getUserInfo(artist).then((data) => {
      setName(data.first_name);
      setCountry(data.country);
      setLastname(data.last_name);
      setBio(data.bio || "Biografia");
    });
    verifySubscription(username, artist).then((data) => {
      setSub(data.isFollower);
    });
    getSubscriptionInfo(artist).then((service) => {
      setSusbcriptionInfo(service);
      console.log(service)
    });
    getCoinBalance().then((data) => {
      console.log(data.funds);
      setCoinBalance(data.funds);
    });
    getReviews(artist).then((data) => {
      setReviews(data.length);
      setAverageRating(data.reduce((acc, review) => acc + parseFloat(review.stars), 0) / data.length);
    });
  }

  const suscribe = async () => {
    const serviceId = susbcriptionInfo.serviceInfo[0].id;
    suscribeToArtist(serviceId).then((data) => {
      console.log(data);
      setSub(true);
      unSubcribeModalShow();
      handleClose();
      window.location.reload();
    });
  }

  const unSuscribe = async () => {
    const serviceId = susbcriptionInfo.serviceInfo[0].id;
    unSuscribeToArtist(username, serviceId).then((data) => {
      console.log(data);
      setSub(false);
      window.location.reload();
    }
    );
  }

  useEffect(() => {
    loadData();
    console.log(susbcriptionInfo)
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
                <Image src={Block} id={style.Block} fluid onClick={blockShow} />
                {/* Modal para bloquear a un usuario */}
                <Modal show={block} onHide={blockClose} className={style.BlockModal}>
                  <Modal.Body className={style.BlockModalBody}>
                    <article>
                      <h3>Bloquear a @beautifulmouse112</h3>
                      <span>No podrás ver publicaciones ni notificaciones de @beautifulmouse112</span>
                    </article>
                    <section className={style.BlockModalFooter}>
                      <div>
                        <p>Bloquear</p>
                      </div>
                      <div>
                        <span onClick={blockClose}>Cancelar</span>
                      </div>
                    </section>
                  </Modal.Body>
                </Modal>
                <div id={style.msgBtn}>
                  Mensaje
                </div>
                <div id={style.subBtn} onClick={handleShow}>
                  {sub ? "Subscrito" : "Subscribirse"}
                </div>
                {/* Modals para confirmar des suvscripcion en caso de estar subscrito */}
                <Modal show={unSuscribeModal} onHide={unSubcribeModalClose} className={style.BlockModal}>
                  <Modal.Body className={style.BlockModalBody}>
                    <article>
                      <span>¿Esta seguro de cancelar la suscripción a:</span>
                      <h3>@beautifulmouse112?</h3>
                    </article>
                    <section className={style.BlockModalFooter}>
                      <div>
                        <span onClick={unSubcribeModalClose}>Salir</span>
                      </div>
                      <div>
                        <p onClick={confirmUnSubsModal}>Cancelar</p>
                      </div>
                    </section>
                  </Modal.Body>
                </Modal>
                <Modal show={buyCredits} onHide={buyCreditsClose} className={style.BlockModal}>
                  <Modal.Body className={style.BlockModalBody}>
                    <article>
                      <span>Lo sentimos, no cuentas con los creditos suficientes para subscribirte a:</span>
                      <h3>@beautifulmouse112?</h3>
                    </article>
                    <section className={style.BlockModalFooter}>
                      <div>
                        <span onClick={buyCreditsClose}>Cancelar</span>
                      </div>
                      <div>
                        <Link to={'/BuyCoins'}>
                          <p>Comprar</p>
                        </Link>
                      </div>
                    </section>
                  </Modal.Body>
                </Modal>
                <Modal show={confirmUnSubsModal} onHide={confirmUnSubsModalClose}>
                  <Modal.Body className={style.ConfirmModals}>
                    <article>
                      <h4>Se ha desuscrito
                        correctamente a:</h4>
                      <h3>@beautifulmouse112</h3>
                    </article>
                  </Modal.Body>
                </Modal>
                {/* Modal para confirmar subscripcion en caso de no estar subscrito */}
                <Modal show={confirmUnSubsModal} onHide={confirmUnSubsModalClose}>
                  <Modal.Body className={style.ConfirmModals}>
                    <article>
                      <h4>Se ha suscrito
                        correctamente a:</h4>
                      <h3>@beautifulmouse112</h3>
                    </article>
                  </Modal.Body>
                </Modal>
                {/* Boton en vista de bloqueo
                <div id={style.blockBtn} onClick={unBlockShow}>
                  Bloqueado
                </div> */}
                {/* // Modal para desbloquear a un usuario */}
                <Modal show={unBlock} onHide={unBlockClose} className={style.BlockModal}>
                  <Modal.Body className={style.BlockModalBody}>
                    <article>
                      <h3>Desbloquear a @beautifulmouse112</h3>
                      <span>Podrás volver a ver las publicaciones y notificaciones de @beautifulmouse112</span>
                    </article>
                    <section className={style.BlockModalFooter}>
                      <div>
                        <p>Desbloquear</p>
                      </div>
                      <div>
                        <span onClick={unBlockClose}>Cancelar</span>
                      </div>
                    </section>
                  </Modal.Body>
                </Modal>
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
                {/* Modal de comprar subscripcion */}
                <Modal show={buySubs} onHide={buySubsClose} id={style.buySubsModal}>
                  <Modal.Header className={style.buySubsModalHeader}>
                    <p>Suscríbete por solo</p>
                  </Modal.Header>
                  <Modal.Body className={style.buySubsModalBody}>
                    <center>
                      <h3>{susbcriptionInfo ? susbcriptionInfo.serviceInfo[0].price : 0} Creditos/mes</h3>
                      <div id={style.subBtnData} onClick={() => { confirmSubsModalShow(); suscribe(); }}>COMPRAR SUSCRIPCIÓN</div>
                    </center>
                  </Modal.Body>
                  <Modal.Footer className={style.buySubsModalFooter}>
                    <span>{coinBalance ? coinBalance : 0} créditos disponibles</span>
                    <p>comprar créditos</p>
                  </Modal.Footer>
                </Modal>
                {/* Modal para confirmar subscripcion */}
                <Modal show={confirmSubsModal} onHide={confirmSubsModalClose}>
                  <Modal.Body className={style.ConfirmModals}>
                    <article>
                      <h4>Se ha suscrito
                        correctamente a:</h4>
                      <h3>@beautifulmouse112</h3>
                    </article>
                  </Modal.Body>
                </Modal>
              </section>
            </div>
            {/* Dision de secciones */}
            <div className={style.porfilUser}>
              <h5>{first_name + " " + lastname}</h5>
              <span id={style.atSign}>@{artist}</span>
              <span>{country}</span>
              <span>{bio}</span>
              <section id={style.Review} onClick={() => navigate(`/UserReviews/${artist}`)}>
                <span id={style.Subs}><span className={style.Nums} >{susbcriptionInfo ? susbcriptionInfo.numberOfFollowers : 0}</span> SUBSCRIPCIONES</span>
                <span className={style.Nums}>{averageRating ? averageRating : 5} <img src={Star} width={15} alt="" /><span id={style.Rev}><span> {reviews}</span> RESEÑAS</span></span>
              </section>
            </div>
            <div>
              {/* 
              Componente para personas que no estan subscritas
              <NotSubscribed />
   */}
              <Subscribed artist={artist} />
              {/* <BlockUser /> */}
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
