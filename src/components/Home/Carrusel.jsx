import Carousel from 'react-bootstrap/Carousel';
import CarruselImg from '../../assets/img/Home/landingback.png';
import style from './Home.module.css';

/*
<Carousel.Item className={style.Carousel}>
    <img
        className={style.ImgCarrusel}
        src={CarruselImg}
        alt="Second slide"
    />
    <Carousel.Caption className={style.Caption}>
        <h1>Celebrando la diversidad artística.</h1>
        <p>Explora una variedad de estilos, técnicas y culturas. Todos los artistas tienen un lugar
            aquí.</p>
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
        <p>Encuentra inspiración en cada rincón. Desde pintura hasta música, nuestro mundo está lleno de
            talento.</p>
        <button className={style.singUpBtn} onClick={() => handleSignIn()}>¡Unete!</button>
    </Carousel.Caption>
</Carousel.Item>
*/

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
                    <h1>Tu red social para adultos: Velora Room.</h1>
                    <p>Descubre Velora Room y conecta con creadores apasionados, explora
                        contenidos únicos y experimenta una comunidad segura y acogedora. Únete a la red social para adultos
                        que valora tu autenticidad. ¡Regístrate hoy y disfruta de una experiencia única!
                    </p>
                    <button className={style.singUpBtn} onClick={() => handleSignIn()}>¡Unete!</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;
