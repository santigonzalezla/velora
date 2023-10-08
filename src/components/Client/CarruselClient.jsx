import Carousel from 'react-bootstrap/Carousel';
import style from './Client.module.css'
import CarruselClientImg from '../../assets/img/Client/CarruselClient.png';

const CarruselClient = () => {
  return (
    <Carousel>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselClientImg}
          alt="First slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Donde la Inspiración se Convierte en Arte.</h1>
          <p>Explora, colabora y crea junto a artistas apasionados de todo el mundo. Tu viaje creativo comienza aquí.</p>
          <button className={style.singUpBtn}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselClientImg}
          alt="Second slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Descubre Nuevas Perspectivas.</h1>
          <p>Explora diferentes estilos, culturas y técnicas. Amplía tus horizontes artísticos en nuestra comunidad diversa.</p>
          <button className={style.singUpBtn}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselClient;
