import { Container, Col, Row } from 'react-bootstrap';
import style from './Client.module.css'
import SecionsImg from '../../assets/img/Client/Sessions.png'
const Sesions = () => {
  return (
    <div>
      <Container>
        <Row id={style.Sesions}>
          <Col sm="12" md="6" lg="6" xl="6">
            <h1>Find what you want</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus neque. In mollis pretium sapien, eu feugiat ligula bibendum nec. Phasellus laoreet laoreet velit, bibendum pretium nibh convallis at. Donec iaculis enim et sagittis tristique.</p>
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

export default Sesions;
