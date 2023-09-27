import style from './HomeApp.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import PayMethod from '../../assets/img/HomeApp/Billing/PayMethod.png'

const HistoralBilling = () => {
  return (
    <div>
      <Container>
        <Row id={style.TransactionsBilling}>
          <Row className={style.TransactionsRows}>
            <Col>
              <p>Nombre transacción</p>
            </Col>
            <Col>
              <img src={PayMethod} alt="" width={50} />
            </Col>
            <Col>
              <p>250 USD</p>
            </Col>
            <Col>
              <p>DD/MM/AAA</p>
            </Col>
          </Row>
          <Row className={style.TransactionsRows}>
            <Col>
              <p>Nombre transacción</p>
            </Col>
            <Col>
              <img src={PayMethod} alt="" width={50} />
            </Col>
            <Col>
              <p>250 USD</p>
            </Col>
            <Col>
              <p>DD/MM/AAA</p>
            </Col>
          </Row>
          <Row className={style.TransactionsRows}>
            <Col>
              <p>Nombre transacción</p>
            </Col>
            <Col>
              <img src={PayMethod} alt="" width={50} />
            </Col>
            <Col>
              <p>250 USD</p>
            </Col>
            <Col>
              <p>DD/MM/AAA</p>
            </Col>
          </Row>
          <Row className={style.TransactionsRows}>
            <Col>
              <p>Nombre transacción</p>
            </Col>
            <Col>
              <img src={PayMethod} alt="" width={50} />
            </Col>
            <Col>
              <p>250 USD</p>
            </Col>
            <Col>
              <p>DD/MM/AAA</p>
            </Col>
          </Row>
        </Row>
      </Container>

    </div>
  );
}

export default HistoralBilling;
