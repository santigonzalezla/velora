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
          <h1>Bienvenido a nuestra comunidad creativa.</h1>
          <p>Conéctate con artistas de todo el mundo y descubre un mundo de creatividad ilimitada</p>
          <button className={style.singUpBtn} onClick={() => handleSignIn()}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="Second slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Celebrando la diversidad artística.</h1>
          <p>Explora una variedad de estilos, técnicas y culturas. Todos los artistas tienen un lugar aquí.</p>
          <button className={style.singUpBtn} onClick={() => handleSignIn()}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="Third slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Inspiración infinita a tu alcance.</h1>
          <p>Encuentra inspiración en cada rincón. Desde pintura hasta música, nuestro mundo está lleno de talento.</p>
          <button className={style.singUpBtn} onClick={() => handleSignIn()}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
