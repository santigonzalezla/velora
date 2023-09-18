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
          <h1>Innovadores para Artistas</h1>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Monetización Inteligente</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Optimiza tus ingresos con herramientas avanzadas de monetización y análisis de audiencia.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}> Exposición Global </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Aumenta tu visibilidad y llega a audiencias internacionales a través de nuestras estrategias de promoción global.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}> Asesoramiento Profesional </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Recibe orientación de expertos en la industria para perfeccionar tu arte y aumentar el tamaño de tu comunidad.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg4} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Herramientas Creativas</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Explora nuestras herramientas innovadoras para la creación y edición de contenido, impulsando tu creatividad.
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
          <h1>Empresariales de Vanguardia</h1>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}> Estrategia de Contenido Impactante </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Desarrollamos estrategias de contenido personalizadas que conectan con tu audiencia de manera significativa.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Campañas Virales </Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Creamos campañas virales guiadas a un publico objetivo garantizando que amplifican tu mensaje y aumentan la participación del público.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg3} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Análisis de Datos Avanzados</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Utilizamos análisis de datos avanzados para optimizar tus esfuerzos de marketing y medir resultados en tiempo real.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={ServicesImg4} />
            </Card>
          </Col>
          <Col xs='12' md='3' className={style.CardCol}>
            <Card className={style.ServiceCards}>
              <Card.Body className={style.ServiceCardBody}>
                <Card.Title className={style.ServCardTxt}>Colaboraciones Estratégicas</Card.Title>
                <Card.Text className={style.ServiceCardsText}>
                  Facilitamos colaboraciones estratégicas con artistas influyentes para aumentar el impacto de tu marca.
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
