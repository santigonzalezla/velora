import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Home.module.css'
import HeroImg from '../../assets/img/Home/Hero.png'
import BeImg from '../../assets/img/Home/Be.png'
import UsImg from '../../assets/img/Home/Us.png'

const Hero = () => {

  let scrollToTop = () => {

    //Funcion para llevar a la parte superior de la app al dar click
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Hace el desplazamiento suave
    });

  }
  return (
    <div id={style.HeaderBackground}>
      <Container>
        <Row className={style.Hero}>
          <Col sm="12" md="4" lg="4" xl="4">
            <h1>Descubre un Mundo de Exclusividad </h1>
            <p>Únete a nuestra comunidad exclusiva para acceso inmediato a contenido cautivador, desde fotos sensuales hasta videos emocionantes. Regístrate y disfruta de experiencias únicas. ¿Qué esperas?</p>
            <Link to='/Client'>
              <button className={style.singUpBtn} onClick={scrollToTop} >Ver mas</button>
            </Link>
          </Col>
          <Col sm="12" md="8" lg="8" xl="8">
            <img src={HeroImg} alt="" id={style.ImgHero} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className={style.Hero}>
          <Col sm="12" md="6" lg="6" xl="6">
            <img src={BeImg} alt="" id={style.ImgBe} />
          </Col>
          <Col sm="12" md="6" lg="6" xl="6">
            <h1>¡Eleva Tu Arte y Tu Carrera!</h1>
            <p>¿Eres un creador apasionado? Únete a nuestra comunidad y gana por tu talento. Libera tu creatividad, construye seguidores y establece conexiones significativas. Tu estilo importa. ¡Súmate hoy!</p>
            <Link to='/Artist' >
              <button className={style.singUpBtn} onClick={scrollToTop} >Ver Más</button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={style.Hero}>
          <Col sm="12" md="6" lg="6" xl="6">
            <h1>¿Quieres Pautar con Nosotros?</h1>
            <p>No te pierdas esta oportunidad única. Únete como amante del contenido o artista. Regístrate para explorar y ganar lo que mereces. </p>
            <Link to='/Company'>
              <button className={style.singUpBtn} onClick={scrollToTop}>Ver Más</button>
            </Link>
          </Col>
          <Col sm="12" md="6" lg="6" xl="6">
            <img src={UsImg} alt="" id={style.ImgUs} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
