import {Card, Container, Row, Col} from 'react-bootstrap';
import style from './Company.module.css'
import {Link} from "react-router-dom";
import BeImg from "../../assets/img/Company/companybenefit.png";

const BenefitsCompany = () =>
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
                    <Col sm="12" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Mejora el alcance</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Eleva todo tu potencial y presencia con nuestras herramientas de promoción y
                                        estadísticas diseñadas para mejorar tus resultados.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Colaboraciones de valor</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Como marca, podrás entrar en contacto con los artistas para generar campañas que
                                        beneficien tus objetivos de negocio. Colabora estratégicamente con los creadores
                                        ideales.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Experiencias de marca</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Personaliza tus eventos en vivo, lanza contenido 100% alineado con tu marca y
                                        diseña campañas memorables que puedan impactar directamente a tus clientes
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3">
                        <Card className={style.Cards}>
                            <Card.Body className={style.CardsContainer}>
                                <Card.Title className={style.CardsTitle}>Análisis de datos</Card.Title>
                                <Card.Text className={style.CardsTxt}>
                                    <p>
                                        Información adicional con la que tus servicios y campañas podrán ser afinadas,
                                        impactando directamente a tus objetivos comerciales.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className={style.benefitsCompanyBottom}>
                <div className={style.benefitsCompanyBottomBack}>

                </div>
                <Row>
                    <Col sm="12" md="6" lg="6" xl="6" className={style.benefitsCompanyBottomText}>
                        <h1>Potencia tu marca</h1>
                        <p>
                            Aquí las empresas descubren un universo de talento creativo. Facilitamos conexiones
                            valiosas entre artistas y marcas comprometidas, forjando colaboraciones que no solo
                            inspiran, sino que también transforman la forma en que se entiende y se vive la creatividad.
                        </p>
                        <Link to='/Artist'>
                            <button className={style.singUpBtn} onClick={scrollToTop}>¡Quiero estar en VELORA ROOM!</button>
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

export default BenefitsCompany;
