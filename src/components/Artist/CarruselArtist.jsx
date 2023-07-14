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
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn}>Sing up</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselArtistImg}
          alt="Second slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn}>Sing up</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselArtistImg}
          alt="Third slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn}>Sing up</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselArtist;
