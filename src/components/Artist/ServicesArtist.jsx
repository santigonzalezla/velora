import {Card, Container, Row, Col} from 'react-bootstrap';
import style from './Artist.module.css';
import ServicesImg1 from '../../assets/img/Artist/artistservice1.png';
import ServicesImg2 from '../../assets/img/Artist/artistservice2.png';
import ServicesImg3 from '../../assets/img/Artist/artistservice3.png';

const ServicesArtist = () => {
    return (
        <div>
            <Container id={style.Services}>
                <h1>Detalles de valor</h1>
                <Row className={style.ServiceRow}>
                    <Col xs='12' md='3' lg='4' className={style.CardCol}>
                        <Card className={style.ServiceCards}>
                            <Card.Body className={style.ServiceCardBody}>
                                <Card.Title className={style.ServCardTxt}>Mejora la monetización</Card.Title>
                                <Card.Text className={style.ServiceCardsText}>
                                    Te ofrecemos herramientas avanzadas de monetización y análisis de audiencia e
                                    ingresos. Obtén información valiosa para optimizar tus ingresos de manera
                                    estratégica.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ServicesImg1}/>
                        </Card>
                    </Col>
                    <Col xs='12' md='3' lg='4' className={style.CardCol}>
                        <Card className={style.ServiceCards}>
                            <Card.Body className={style.ServiceCardBody}>
                                <Card.Title className={style.ServCardTxt}>Herramientas únicas</Card.Title>
                                <Card.Text className={style.ServiceCardsText}>
                                    Accede a diferentes plataformas profesionales para crear, editar y difundir tus
                                    contenidos, elevando el nivel de tus servicios desde el día 1 de contratación del
                                    BOOST.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ServicesImg2}/>
                        </Card>
                    </Col>
                    <Col xs='12' md='3' lg='4' className={style.CardCol}>
                        <Card className={style.ServiceCards}>
                            <Card.Body className={style.ServiceCardBody}>
                                <Card.Title className={style.ServCardTxt}>Las reglas las pones tú</Card.Title>
                                <Card.Text className={style.ServiceCardsText}>
                                    Maneja tu agenda y preferencias para los eventos y servicios a tu gusto, define las
                                    actividades  que hacen parte de los servicios que ofreces y ten la libertad de
                                    decidir sobre las propuestas de tus clientes.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img className={style.ServiceCardsImg} variant="bottom" src={ServicesImg3}/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServicesArtist;
