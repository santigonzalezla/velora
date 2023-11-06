import {Card, Container, Row, Col} from 'react-bootstrap';
import style from './Artist.module.css'
import {Link} from "react-router-dom";
import BeImg from "../../assets/img/Artist/artistmiddle.png";

const BenefitsArtist = () =>
{
    const scrollToTop = () =>
    {
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
                                <Card.Title className={style.CardsTitle}>Genera ingresos</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        En nuestra plataforma, cada uno de tus contenidos creativos podrá generar los
                                        ingresos que refleje tu dedicación, permitiéndote alcanzar tus metas financieras
                                        mientras sigues expresando tu pasión.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Libertad creativa</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Obtén la libertad de expresar tu arte sin restricciones. Diseña y comercializa
                                        tus habilidades de modelaje, fotografía, video y más servicios personales.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Genera más seguidores</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Puedes conectar de manera profunda con fans que aprecian genuinamente tu trabajo
                                        y generar una base de seguidores que beneficie a la venta de tus servicios.
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
                                        Confía en nosotros para brindarte un espacio seguro y confiable para tu arte.
                                        Nuestra plataforma es privada y ha sido diseñada para salvaguardar la integridad
                                        de todos los usuarios.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className={style.benefitsArtistBottom}>
                <div className={style.benefitsArtistBottomBack}>

                </div>
                <Row>
                    <Col sm="12" md="6" lg="6" xl="6" className={style.benefitsArtistBottomText}>
                        <h1>crea, inspira y genera</h1>
                        <p>
                            En Velora Room, te ofrecemos la oportunidad de compartir tu arte, conectar con seguidores
                            apasionados y obtener recompensas por tu pasión y esfuerzo creativo. Regístrate como artista
                            ahora y comienza a crear, inspirar y generar ganancias.
                        </p>
                        <Link to='/Artist'>
                            <button className={style.singUpBtn} onClick={scrollToTop}>¡Quiero ser artista!</button>
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

export default BenefitsArtist;
