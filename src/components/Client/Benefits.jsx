import { Card, Container, Row, Col } from 'react-bootstrap';
import style from './Client.module.css'

const Benefits = () => {
  return (
    <div id={style.Benefits}>
      <Container id={style.Benefits}>
        <Row>
          <h1>Beneficios</h1>
          <Col className={style.CardsColums} sm="12" md="2" lg="2" xl="2">
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.CardsColums} sm="12" md="2" lg="2" xl="2">
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.CardsColums} sm="12" md="2" lg="2" xl="2">
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.CardsColums} sm="12" md="2" lg="2" xl="2">
            <Card className={style.Cards} >
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text className={style.CardsTxt}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.CardsColums} sm="12" md="2" lg="2" xl="2">
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

export default Benefits;
