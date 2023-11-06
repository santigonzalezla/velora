import Carousel from 'react-bootstrap/Carousel';
import style from './Artist.module.css';
import CarruselArtistImg from '../../assets/img/Artist/artistback.png';

const CarruselArtist = () =>
{
    return (
        <Carousel>
            <Carousel.Item className={style.Carousel}>
                <img
                    className={style.ImgCarrusel}
                    src={CarruselArtistImg}
                    alt="First slide"
                />
                <Carousel.Caption className={style.Caption}>
                    <h1>Que tu talento pague ¡Únete como creador!</h1>
                    <p>
                        Conviértete en un creador en Velora Room y desbloquea un mundo de posibilidades creativas.
                        Únete a nuestra comunidad exclusiva, comparte tu talento, y conecta con seguidores apasionados.
                        Descubre una plataforma que valora la autenticidad y la expresión artística.
                    </p>
                    <button className={style.singUpBtn}>¡Unete!</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarruselArtist;
