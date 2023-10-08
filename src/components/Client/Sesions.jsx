import { Container, Col, Row } from 'react-bootstrap';
import style from './Client.module.css'
import SecionsImg from '../../assets/img/Client/Sessions.png'
const Sesions = () => {
  return (
    <div>
      <Container>
        <Row id={style.Sesions}>
          <Col sm="12" md="6" lg="6" xl="6">
            <h1>Tu momento especial</h1>
            <p>Descubre un mundo de placer y autenticidad. Únete a nuestra comunidad para acceder a contenido exclusivo, conectar con artistas, vivir experiencias únicas y disfrutar de una privacidad garantizada. No dejes pasar esta oportunidad. Únete ahora y empieza a crear momentos inolvidables. Tu experiencia te espera.</p>
            <button className={style.singUpBtn} >¡Unete!</button>
          </Col>
          <Col sm="12" md="6" lg="6" xl="6">
            <img src={SecionsImg} alt="" id={style.ImgHero} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sesions;
