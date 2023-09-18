import { Container, Col, Row } from 'react-bootstrap';
import style from './Artist.module.css'
import SecionsImg from '../../assets/img/Artist/Sessions.png'

const SesionsArtist = () => {
  return (
    <div>
      <Container>
        <Row id={style.Sesions}>
          <Col sm="12" md="6" lg="6" xl="6">
            <h1>Eleva Tu Carrera Artística con Nosotros</h1>
            <p>¿Eres un creador apasionado en busca de oportunidades para destacar y prosperar? Únete a nuestra comunidad de artistas y descubre un mundo de ingresos justos, libertad creativa sin límites, una base de seguidores leales y una plataforma segura para expresar tu arte. No dejes que tu talento pase desapercibido. Únete ahora y comienza a dar vida a tus sueños artísticos. Tu éxito te espera.</p>
            <button className={style.singUpBtn} >Sing up</button>
          </Col>
          <Col sm="12" md="6" lg="6" xl="6">
            <img src={SecionsImg} alt="" id={style.ImgHero} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SesionsArtist;
