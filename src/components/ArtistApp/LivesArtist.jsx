import style from './ArtistApp.module.css'
import { Container, Col, Row, Image } from "react-bootstrap";
import Live from '../../assets/img/HomeApp/Lives/Live.png'
import Eclipse from '../../assets/img/HomeApp/Lives/Eclipse.png'
import Spectator from '../../assets/img/HomeApp/Lives/Spectator.png'

const LivesArtist = () => {
  return (
    <Container id={style.Lives} fluid>
      <Row>
        <Col xs='12' sm='12' md='9' lg='9'>
          <Image src={Live} id={style.LiveVideo} />
        </Col>
        <Col xs='12' sm='12' md='3' lg='3' className={style.LiveChat}>
          <div className={style.Streamer}>
            <Image src={Eclipse} className={style.StreamerPhoto} />
            <div className={style.StreamerTxt}>
              <span>Beautiful Mouse</span>
              <span>@beautifulmouse112</span>
            </div>
          </div>
          <div className={style.SpectatorContainer}>
            <section className={style.SpectatorItem}>
              <Image src={Spectator} className={style.Spectator} />
              <div className={style.SpectatorTxt}>
                <span>@beautifulmouse112</span>
                <span>Lorem ipsum dolor sit am um dolor sit am</span>
              </div>
            </section>
            <section className={style.SpectatorItem}>
              <Image src={Spectator} className={style.Spectator} />
              <div className={style.SpectatorTxt}>
                <span>@beautifulmouse112</span>
                <span>Lorem ipsum dolor sit am um dolor sit am</span>
              </div>
            </section>
            <section className={style.SpectatorItem}>
              <Image src={Spectator} className={style.Spectator} />
              <div className={style.SpectatorTxt}>
                <span>@beautifulmouse112</span>
                <span>Lorem ipsum dolor sit am um dolor sit am</span>
              </div>
            </section>
            <input type="text" className={style.LiveSend} placeholder='Lorem ipsum dolo' />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LivesArtist;