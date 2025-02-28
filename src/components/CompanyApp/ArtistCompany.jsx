import style from './CompanyApp.module.css'
import { Image, Row, Col, Nav, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import SideBarCompany from './SideBarCompany';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import AddMedia from '../../assets/img/ArtistApp/ArtistPorfile/addmedia.png'
import FeedArtist from '../ArtistApp/FeedArtist';
import SuggestionsCompany from './SuggestionsCompany';

const ArtistCompany = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id={style.ViewArtist}>
      <SideBarCompany />
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
                  Contactame
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className={style.PostTittle}>Nueva publicación</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input className={style.PostInput} />
                    <Form.Select id={style.SelectView}>
                      <option>¿Quién puede ver?</option>
                      <option value="1">Todos</option>
                      <option value="2">Solo Clientes Premium</option>
                    </Form.Select>
                  </Modal.Body>
                  <Modal.Footer id={style.modalFooter}>
                    <img src={AddMedia} width={20} />
                    <p>Publicar</p>
                  </Modal.Footer>
                </Modal>
              </section>
            </div>
            <div className={style.porfilUser}>
              <h5>Beautiful Mouse</h5>
              <span id={style.atSign}>@beautifulmouse112</span>
              <span>Colombia</span>
              <span>TextoBiografía lorem ipsum</span>
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
            <SuggestionsCompany />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArtistCompany;
