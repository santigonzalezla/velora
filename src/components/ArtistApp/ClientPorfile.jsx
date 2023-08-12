import style from './ArtistApp.module.css'
import { Image, Row, Col, Container } from 'react-bootstrap';
import Banner from '../../assets/img/ArtistApp/ClientPorfile/banner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Block from '../../assets/img/HomeApp/ViewArtist/Block.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import Star2 from '../../assets/img/ArtistApp/ClientPorfile/star2.png'
import SideBarArtist from './SideBarArtist';
import SuggetionsArtist from './SuggetionsArtist';

const ClientPorfile = () => {
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
                  Mensaje
                </div>
              </section>
            </div>
            <div className={style.porfilUser}>
              <h5>Usuario Cliente</h5>
              <span id={style.atSign}>@beautifulmouse112</span>
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
