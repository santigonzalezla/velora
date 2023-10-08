import Carousel from 'react-bootstrap/Carousel';
import style from './Artist.module.css'
import CarruselArtistImg from '../../assets/img/Artist/CarruselArtistImg.png'

const CarruselArtist = () => {

  return (
    <Carousel>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselArtistImg}
          alt="First slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Tu Espacio Creativo Personal.</h1>
          <p>Crea un perfil único, exhibe tu portafolio y conecta con amantes del arte como tú. Tu arte, tu comunidad.</p>
          <button className={style.singUpBtn}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselArtistImg}
          alt="Second slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Tu escenario creativo personalizado.</h1>
          <p>Crea un perfil único, comparte tu trabajo y deja que el mundo descubra tu talento.</p>
          <button className={style.singUpBtn}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselArtist;
