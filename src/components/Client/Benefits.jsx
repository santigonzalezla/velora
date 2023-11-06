import {Card, Container, Row, Col} from 'react-bootstrap';
import style from './Client.module.css'
import BeImg from "../../assets/img/Client/benefits.png";
import {Link} from "react-router-dom";

const Benefits = () =>
{
    const scrollToTop = () =>
    {
        //Funcion para llevar a la parte superior de la app al dar click
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hace el desplazamiento suave
        });
    }

    return (
        <div id={style.Benefits}>
            <Container className={style.Benefits}>
                <h1>Beneficios</h1>
                <Row className={style.BenefitsRow}>
                    <Col sm="3" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Contenido Exclusivo</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        En diferentes formatos, como fotos, videos, transmisiones en vivo, interacciones
                                        cara a cara, etc.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Interactúa directamente</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Conversa con los creadores, envía mensajes privados y accede a eventos
                                        exclusivos en tiempo real. Crea conexiones genuinas con tus artistas favoritos.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Experiencias Inolvidables</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Virtualmente o cara a cara, Velora Room te brinda la oportunidad de vivir
                                        experiencias memorables que se quedarán contigo por mucho tiempo.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Privado y seguro</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Implementamos rigurosas medidas y filtros digitales para que tu actividad en
                                        nuestra plataforma sea confidencial y segura.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className={style.benefitsBottom}>
                <div className={style.benefitsBottomBack}>

                </div>
                <Row>
                    <Col sm="12" md="6" lg="6" xl="6" className={style.benefitsBottomText}>
                        <h1>Un cataogo de entretenimiento</h1>
                        <p>
                            Prepárate para un viaje inolvidable. Velora Room es tu pasaporte a un mundo de
                            experiencias auténticas. Regístrate hoy mismo para conocer todos los servicios exclusivos y
                            conectar con artistas apasionados.
                        </p>
                        <Link to='/Artist'>
                            <button className={style.singUpBtn} onClick={scrollToTop}>Ver contenido exclusivo</button>
                        </Link>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <img src={BeImg} alt="" id={style.ImgBe}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Benefits;
