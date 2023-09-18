import { Card, Container, Row, Col } from 'react-bootstrap';
import style from './Artist.module.css'

const BenefitsArtist = () => {
  return (
    <div id={style.Benefits}>
      <Container id={style.Benefits}>
        <Row className={style.BenefitsRow}>
          <h1>Beneficios</h1>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Ingresos Lucrativos</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Maximiza y lleva con control de tus ganancias con una plataforma que valora tu arte. Gana lo que mereces por tu talento y esfuerzo creativo.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Libertad Creativa</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Expresa tu arte sin limitaciones. Define tu estilo y contenido, construyendo tu marca única y conectando con tus seguidores.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title> Comunidad Leal</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Cultiva una base de seguidores apasionados. Fomenta conexiones significativas con fans que aprecian tu trabajo y te apoyan</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Seguridad y Privacidad</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Tu seguridad y privacidad son primordiales. Crea en un entorno protegido y confiable, centrado en la confidencialidad</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BenefitsArtist;
