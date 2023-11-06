import Carousel from 'react-bootstrap/Carousel';
import style from './Client.module.css'
import CarruselImg from "../../assets/img/Client/landingclientback.png";

const CarruselClient = () => {
    return (
        <Carousel>
            <Carousel.Item className={style.Carousel}>
                <img
                    className={style.ImgCarrusel}
                    src={CarruselImg}
                    alt="First slide"
                />
                <Carousel.Caption className={style.Caption}>
                    <h1>acceso a experiencias inolvidables.</h1>
                    <p>
                        Entendemos que las necesidades de nuestros usuarios pueden ser únicas. Nuestros creadores de
                        contenido ofrecen servicios a medida para adaptarse a tus requerimientos específicos. Si no
                        encuentras lo que buscas, no dudes en contactar a un creador y discutir tus necesidades
                        personalizadas.
                    </p>
                    <button className={style.singUpBtn} onClick={() => handleSignIn()}>¡Unete!</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarruselClient;
