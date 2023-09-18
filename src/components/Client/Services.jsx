import { Card, Container, Row, Col } from 'react-bootstrap';
import style from './Client.module.css'
import ServicesImg1 from '../../assets/img/Client/ServicesImg1.png'
import ServicesImg2 from '../../assets/img/Client/ServicesImg2.png'
import ServicesImg3 from '../../assets/img/Client/ServicesImg3.png'
import ServicesImg4 from '../../assets/img/Client/ServicesImg4.png'

const Services = () => {
  return (
    <div>
      <Container id={style.Benefits}>
        <Row className={style.BenefitsRow}>
          <h1>Servicios</h1>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Comunicación Privada</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Establece conexiones auténticas con tus artistas favoritos a través de mensajes privados, videollamadas y chats en vivo.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg1} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Privacidad y Seguridad </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Tu confidencialidad es nuestra prioridad. Garantizamos un entorno seguro y protegido para disfrutar sin preocupaciones.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}> Eventos Exclusivos</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Accede a eventos en vivo y experiencias únicas que te permiten interactuar en tiempo real con los artistas.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg4} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}> Contenido Premium</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Sumérgete en un mundo de entretenimiento exclusivo con fotos y videos de alta calidad que despiertan tus deseos.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg2} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
