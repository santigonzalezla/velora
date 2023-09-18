import { Card, Container, Row, Col } from 'react-bootstrap';
import style from './Company.module.css'

const BenefitsCompany = () => {
  return (
    <div id={style.Benefits}>
      <Container id={style.Benefits}>
        <Row className={style.BenefitsRow}>
          <h1>Beneficios</h1>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title> Promoción Efectiva</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Amplía tu alcance, potencial y visibilidad con nuestras herramientas de promoción y estadistica altamente efectivas, llegando a una amplia audiencia comprometida.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title> Colaboraciones Estratégicas</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Establece relaciones con artistas y creadores para campañas exclusivas que generen impacto y conecten con tu audiencia de manera auténtica.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Experiencias de Marca</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Ofrece a tus clientes experiencias únicas y memorables a través de eventos en vivo y contenido personalizado, impulsando la lealtad y la interacción.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Analítica y Seguimiento</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Accede a datos exactos y análisis en tiempo real para tomar decisiones informadas, asertivas y aumentar el impacto de tu presencia en nuestra plataforma</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BenefitsCompany;
