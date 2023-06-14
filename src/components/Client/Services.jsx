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
          <Col >
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>¿Te gustaría conocer a tu Artista?</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  A través de nuestro servicio Handshake, Concreta una cita, virtual o presencial  para conocerle
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg1} />
            </Card>
          </Col>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Accede al contenido comprado, de subscripción, y a sugerencias de contenido basado en tu consumo
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Lives</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Gravida diam enim sed ut mi. Est in sit sed tincidunt.Gravida diam enim sed ut mi. Est in sit sed tincidunt.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg4} />
            </Card>
          </Col>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Gravida diam enim sed ut mi. Est in sit sed tincidunt.Gravida diam enim sed ut mi. Est in sit sed tincidunt.
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
