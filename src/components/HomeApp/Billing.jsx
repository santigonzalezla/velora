import style from './HomeApp.module.css'
import SideBar from './SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Billing/Logo.png'
import PayMethod from '../../assets/img/HomeApp/Billing/PayMethod.png'

const Billing = () => {
  return (
    <div id={style.Billings}>
      <SideBar />
      <section id={style.BillingContainer} >
        <Container fluid>
          <Row id={style.BillingRow}>
            <Col md='4' className={style.BillingItems}>
              <section id={style.UsdBilling}>
                <p>35 USD</p>
              </section>
            </Col>
            <Col md='4' className={style.BillingItems}>
              <section id={style.Credits}>
                <div id={style.AvailableCredits}>
                  <p>1 Crédito</p>
                </div>
                <div id={style.CreditsBuy}>
                  Comprar Créditos
                </div>
              </section>
            </Col>
            <Col md='4' className={style.BillingItems}>
              <img src={Logo} alt="" id={style.BillingLogo} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row id={style.TransactionsBilling}>
            <section>
              <h5>Historial de  transacciones</h5>
            </section>
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
      </section>
    </div>
  );
}

export default Billing;
