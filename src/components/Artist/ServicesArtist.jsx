import { Card, Container, Row, Col } from 'react-bootstrap';
import style from './Artist.module.css'
import ServicesImg1 from '../../assets/img/Client/ServicesImg1.png'
import ServicesImg2 from '../../assets/img/Client/ServicesImg2.png'
import ServicesImg3 from '../../assets/img/Client/ServicesImg3.png'
import ServicesImg4 from '../../assets/img/Client/ServicesImg4.png'

const ServicesArtist = () => {
  return (
    <div>
      <Container id={style.Services}>
        <Row className={style.BenefitsRow}>
          <h1>Servicios</h1>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Ingresos Justos</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Maximiza tus ganancias con una estructura de ingresos transparente y sin intermediarios.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg1} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Libertad Creativa </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Expresa tu arte sin restricciones, definiendo tu estilo y contenido a tu manera.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}> Comunidad Leal</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Construye una base de seguidores dedicados que te apoyan y siguen tu evolución artística.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg4} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Seguridad Garantizada</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Crea en un entorno protegido y confiable, donde tu privacidad y seguridad son primordiales.
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

export default ServicesArtist;
