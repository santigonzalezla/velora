import { Container, Row, Col } from 'react-bootstrap';
import HeroImg from '../../assets/img/Hero.png'
import style from './Home.module.css'

const Hero = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="12" md="4" lg="4" xl="4">
            <h1>Find what you want</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus neque. In mollis pretium sapien, eu feugiat ligula bibendum nec. Phasellus laoreet laoreet velit, bibendum pretium nibh convallis at. Donec iaculis enim et sagittis tristique.</p>
            <button className={style.singUpBtn}>Sing up</button>
          </Col>
          <Col sm="12" md="8" lg="8" xl="8">
            <img src={HeroImg} alt="" id={style.ImgHero} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
