import style from './HomeApp.module.css'
import { Image, Row, Col, Nav, Container } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Suggetions from '../Suggetions/Suggetions';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import Feed from '../Feed/Feed'

const ViewArtist = () => {
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
                <div id={style.subBtn}>
                  Subscríbete
                </div>
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
            <Feed />
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
