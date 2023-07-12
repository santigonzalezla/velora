import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Home.module.css'
import HeroImg from '../../assets/img/Home/Hero.png'
import BeImg from '../../assets/img/Home/Be.png'
import UsImg from '../../assets/img/Home/Us.png'

const Hero = () => {
  return (
    <div id={style.HeaderBackground}>
      <Container>
        <Row className={style.Hero}>
          <Col sm="12" md="4" lg="4" xl="4">
            <h1>Find what you want</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus neque. In mollis pretium sapien, eu feugiat ligula bibendum nec. Phasellus laoreet laoreet velit, bibendum pretium nibh convallis at. Donec iaculis enim et sagittis tristique.</p>
            <Link to='/Client'>
              <button className={style.singUpBtn} >Ver mas</button>
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
            <h1>Be an Artist</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus neque. In mollis pretium sapien, eu feugiat ligula bibendum nec. Phasellus laoreet laoreet velit, bibendum pretium nibh convallis at. Donec iaculis enim et sagittis tristique.</p>
            <Link to='/Artist' >
              <button className={style.singUpBtn}>Ver Más</button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={style.Hero}>
          <Col sm="12" md="6" lg="6" xl="6">
            <h1>¿Quieres Pautar con Nosotros?</h1>
            <p>Accede a nuestro catálogo de artistas y descubre lo que ofrecemos para tu negocio</p>
            <Link to='/Company'>
              <button className={style.singUpBtn}>Ver Más</button>
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
