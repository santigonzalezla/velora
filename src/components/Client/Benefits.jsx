import { Card, Container, Row, Col } from 'react-bootstrap';
import style from './Client.module.css'

const Benefits = () => {
  return (
    <div id={style.Benefits}>
      <Container id={style.Benefits}>
        <Row>
          <h1>Beneficios</h1>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Contenido Exclusivo</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Descubre un mundo de contenido que no encontrarás en ningún otro lugar. Desde fotos y videos privados hasta experiencias únicas, te ofrecemos exclusividad.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Conexiones Auténticas</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Conéctate con tus artistas favoritos de manera cercana. Comentarios, mensajes privados y eventos en vivo te acercan más que nunca.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Experiencias Inolvidables</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Vive momentos íntimos y emocionantes que te dejarán sin aliento. Nuestra comunidad te ofrece experiencias que perdurarán en tu memoria.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Privacidad Garantizada</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Tu privacidad es nuestra prioridad. Tu actividad en nuestra plataforma es confidencial,discreta y segura, para que disfrutes sin preocupaciones.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefits;
