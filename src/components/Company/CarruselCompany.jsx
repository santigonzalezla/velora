import Carousel from 'react-bootstrap/Carousel';
import CarruselImg from '../../assets/img/Company/CarruselCompany.png'
import style from './Company.module.css'

const CarruselCompany = () => {
  return (
    <Carousel>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="First slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Exposición Global, Oportunidades Locales.</h1>
          <p>Presenta tu arte a nivel mundial y encuentra oportunidades locales con empresas que valoran y apoyan tu talento.</p>
          <button className={style.singUpBtn}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="Second slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>El Apoyo que Tu Talento Merece.</h1>
          <p>Desde exposiciones patrocinadas hasta proyectos de responsabilidad social, encuentra el apoyo financiero y creativo que mereces como artista.</p>
          <button className={style.singUpBtn}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.Carousel}>
        <img
          className={style.ImgCarrusel}
          src={CarruselImg}
          alt="Third slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h1>Únete y Descubre un Mundo de Oportunidades.</h1>
          <p>Tu próximo proyecto artístico podría ser la próxima gran campaña publicitaria. Únete ahora y haz que tus sueños creativos se hagan realidad.</p>
          <button className={style.singUpBtn}>¡Unete!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselCompany;
