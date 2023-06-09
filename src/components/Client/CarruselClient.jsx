import Carousel from 'react-bootstrap/Carousel';
import style from './Client.module.css'
import CarruselClientImg from '../../assets/img/Client/CarruselClient.png';

const CarruselClient = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarruselClientImg}
          alt="First slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn}>Sing up</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarruselClientImg}
          alt="Second slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Lorem Ipsum</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className={style.singUpBtn}>Sing up</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarruselClientImg}
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

export default CarruselClient;
