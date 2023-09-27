import style from './HomeApp.module.css'
import { useState } from 'react';
import { Image, Row, Col, Nav, Container, Modal } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Suggetions from '../Suggetions/Suggetions';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import Date from '../../assets/img/HomeApp/ViewArtist/Date.png'
import WebCam from '../../assets/img/HomeApp/ViewArtist/WebCam.png'
// import Feed from '../Feed/Feed'

const ViewArtist = () => {
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
                  <Modal.Header closeButton className={style.buySubsModalHeader}>
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
            <div className={style.porfilUser}>
              <h5>Beautiful Mouse</h5>
              <span id={style.atSign}>@beautifulmouse112</span>
              <span>Colombia</span>
              <span>TextoBiografía lorem ipsum</span>
              <section id={style.Review}>--
                <span id={style.Subs}><span className={style.Nums} >53K</span> SUBSCRIPCIONES</span>
                <span className={style.Nums}>4.3 <img src={Star} width={15} alt="" /><span id={style.Rev}><span> 52K</span> RESEÑAS</span></span>
              </section>
            </div>
            <Nav id={style.Navies}>
              <Nav.Link>FEED</Nav.Link>
              <Nav.Link>PREMIUM</Nav.Link>
              <p id={style.RoomBtn} >ROOM ME</p>
              {/*
                Modal para usuarios que no tiene servicios ROOOM ME <Modal show={reqSubs} onHide={reqSubsClose} id={style.buySubsModal}>
                <Modal.Body className={style.buySubsModalBody}>
                  <center>
                    <h3>Para acceder a  Estos servicios debes de pagar la subcripción </h3>
                    <div id={style.subBtnData} onClick={buySubsShow}>COMPRAR SUSCRIPCIÓN</div>
                  </center>
                </Modal.Body>
              </Modal> */}
            </Nav>
            <section>
              Servicios premiun
            </section>
            {/* Seccion de servicio Room Me
            <section>
              <Container>
                <Row>
                  <Col>
                    <div className={style.RoomMeServices}>
                      <Image src={Date} width={200} />
                    </div>
                  </Col>
                  <Col >
                    <div className={style.RoomMeServices}>
                      <Image src={WebCam} width={200} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section> */}
            {/* <Feed /> */}
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
