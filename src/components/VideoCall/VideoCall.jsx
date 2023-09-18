import style from './HomeApp.module.css'
import { Container, Col, Row, Image } from "react-bootstrap";
import Call from '../../assets/img/HomeApp/VideoCall/Call.png'
import Spectator from '../../assets/img/HomeApp/Lives/Spectator.png'

const VideoCall = () => {
  return (
    <Container id={style.VideoCall} fluid>
      <Row>
        <Col xs='12' sm='12' md='9' lg='9'>
          <Image src={Call} id={style.LiveVideo} />
        </Col>
        <Col xs='12' sm='12' md='3' lg='3' >
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
        </Col>
      </Row>
    </Container>
  );
}

export default VideoCall;
