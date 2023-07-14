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
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.BenefitsRow}>
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
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
