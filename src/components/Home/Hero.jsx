import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import style from './Home.module.css'
import HeroImg from '../../assets/img/Home/herocomments.png'
import BeImg from '../../assets/img/Home/herojoin.png'
import UsImg from '../../assets/img/Home/heropublicity.png'

const Hero = () =>
{
    let scrollToTop = () =>
    {

        //Funcion para llevar a la parte superior de la app al dar click
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hace el desplazamiento suave
        });

    }

    return (
        <div id={style.HeaderBackground}>
            <Container>
                <Row className={style.Hero}>
                    <Col sm="6" md="8" lg="8" xl="7">
                        <h1>Acceso a exxperiencias innolvidables </h1>
                        <p>Únete a la red social para adultos que cambia las reglas del juego ¡Encuentra las mejores
                            fotos y videos íntimos, transmisiones en vivo que te dejarán sin palabras y muchos más
                            servicios!
                            Regístrate y accede al mejor contenido personalizado para mayores de edad.
                        </p>
                        <Link to='/Client'>
                            <button className={style.singUpBtn} onClick={scrollToTop}>Ver beneficios</button>
                        </Link>
                    </Col>
                    <Col sm="6" md="4" lg="4" xl="5" className={style.ImgContainer}>
                        <img src={HeroImg} alt="" id={style.ImgHero}/>
                    </Col>
                </Row>
            </Container>
            <Container className={style.heroMiddle}>
                <Container className={style.heroMiddleCont}>

                </Container>
                <Row className={style.Hero}>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <img src={BeImg} alt="" id={style.ImgBe}/>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <h1>Que tu talento pague ¡Únete como creador!</h1>
                        <p>¿Tienes contenido que deseas compartir? Únete y comienza a generar ganancias.</p>
                        <p>
                            Comparte tu creatividad, conecta con tu audiencia y aumenta tus ingresos. Tu contenido, tu éxito.

                            Nosotros te respaldamos, creamos un entorno seguro que te permita expresarte libremente ¡Y te damos
                            herramientas para crecer!
                        </p>
                        <Link to='/Artist'>
                            <button className={style.singUpBtn} onClick={scrollToTop}>Ver Más</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className={style.Hero}>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <h1>¿Quieres Pautar con Nosotros?</h1>
                        <p>
                            En nuestra vibrante comunidad de creadores, las empresas descubren un verdadero
                            tesoro de talento y creatividad. Conectamos apasionadamente a los creadores con marcas que valoran y
                            respaldan su arte, fomentando colaboraciones de alta calidad. Ya sea que busques aportar tu voz única
                            como creador o desees unirte como empresa, aquí encontrarás un espacio para el crecimiento y la
                            innovación.
                        </p>
                        <Link to='/Company'>
                            <button className={style.singUpBtn} onClick={scrollToTop}>Ver beneficios</button>
                        </Link>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <img src={UsImg} alt="" id={style.ImgUs}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
