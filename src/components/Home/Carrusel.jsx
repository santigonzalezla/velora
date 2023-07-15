import Carousel from 'react-bootstrap/Carousel';
import CarruselImg from '../../assets/img/Home/Carrusel.png'
import style from './Home.module.css'

const Carrusel = ({handleSignIn}) => {
  return (
    <Carousel>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="First slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn} onClick={() => handleSignIn()}>Sign up</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="Second slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn} onClick={() => handleSignIn()}>Sign up</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="Third slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn} onClick={() => handleSignIn()}>Sign up</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
