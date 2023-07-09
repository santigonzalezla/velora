import { Card, Container, Row, Col } from 'react-bootstrap';
import style from './Company.module.css'
import ServicesImg2 from '../../assets/img/Client/ServicesImg2.png'
import ServicesImg3 from '../../assets/img/Client/ServicesImg3.png'
import ServicesImg4 from '../../assets/img/Client/ServicesImg4.png'

const ServicesCompany = () => {
  return (
    <div>
      <Container id={style.Benefits}>
        <Row className={style.BenefitsRow}>
          <h1>Servicio: Artistas Velora</h1>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Escoge el artista que más te guste
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Escoge el artista que más te guste
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Organiza eventos con tu Artista
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
                  Escoge el artista que más te guste
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg2} />
            </Card>
          </Col>
        </Row>
        <section className={style.BuyService}>
          <button className={style.BuyButton}>Comprar servicio: $25</button>
        </section>
      </Container>
      <Container id={style.Benefits}>
        <Row className={style.BenefitsRow}>
          <h1>Servicio: Promueve tu establecimiento</h1>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Escoge el artista que más te guste
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Escoge el artista que más te guste
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>NOMBRE DEL SERVICIO</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Escoge el artista que más te guste
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
                  Escoge el artista que más te guste
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg2} />
            </Card>
          </Col>
        </Row>
        <section className={style.BuyService}>
          <button className={style.BuyButton}>Comprar servicio: $25</button>
        </section>
      </Container>
    </div>
  );
}

export default ServicesCompany;
