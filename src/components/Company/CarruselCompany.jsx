import Carousel from 'react-bootstrap/Carousel';
import CarruselImg from '../../assets/img/Company/companyback.png';
import style from './Company.module.css';

const CarruselCompany = () =>
{
    return (
        <Carousel>
            <Carousel.Item className={style.Carousel}>
                <img
                    className={style.ImgCarrusel}
                    src={CarruselImg}
                    alt="First slide"
                />
                <Carousel.Caption className={style.Caption}>
                    <h1>Tus Artistas Favoritos al alcance de tu negocio.</h1>
                    <p>
                        Descubre cómo las empresas y marcas pueden aprovechar al máximo la creatividad y autenticidad de
                        los artistas de Velora Room. Colabora con talento apasionado, crea conexiones significativas y
                        genera campañas únicas que resuenen con tu audiencia.
                    </p>
                    <button className={style.singUpBtn} onClick={() => handleSignIn()}>¡Unete!</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarruselCompany;
