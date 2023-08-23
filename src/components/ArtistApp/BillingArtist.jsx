import style from './ArtistApp.module.css'
import SideBarArtist from './SideBarArtist';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Billing/Logo.png'

const BillingArtist = () => {
  return (
    <div id={style.Billings}>
      <SideBarArtist />
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
                  Retirar Créditos
                </div>
              </section>
            </Col>
            <Col md='4' className={style.BillingItems}>
              <img src={Logo} alt="" id={style.BillingLogo} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row >
            <Col sm='6'>
              <section className={style.weeklyEarn}>
                <select name="Esta semana" id="">
                  <option value="">Esta semana </option>
                </select>
                <div className={style.weeklyEarnItem}>
                  <p>transacciones</p>
                  <h3>35</h3>
                </div>
                <div className={style.weeklyEarnItem}>
                  <p>ingresos</p>
                  <h3>35</h3>
                </div>
              </section>
              <h5>Servicios ROOM ME</h5>
              <section className={style.serviceRoomME}>
                <div className={style.serviceRoomMEItem}>
                  <p>Virtual</p>
                  <h4>300 USD</h4>
                </div>
                <div className={style.serviceRoomMEItem}>
                  <p>Eventos</p>
                  <h4>300 USD</h4>
                </div>
                <div className={style.serviceRoomMEItem}>
                  <p>Presencial</p>
                  <h4>300 USD</h4>
                </div>
              </section>
              <section className={style.serviceRoomME2}>
                <div className={style.serviceRoomMESubItem}>
                  <p>Suscripciones</p>
                  <h3>300 USD</h3>
                </div>
                <div className={style.serviceRoomMESubItem}>
                  <p>Ventas Paquetes</p>
                  <h3>300 USD</h3>
                </div>
              </section>
              <section className={style.WhiteSection}>

              </section>
            </Col>
            <Col sm='6' id={style.TransactionsBilling}>
              <section>
                <h5>Historial de  transacciones</h5>
              </section>
              <Row className={style.TransactionsRows}>
                <Col>
                  <p>Nombre transacción</p>
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
                  <p>250 USD</p>
                </Col>
                <Col>
                  <p>DD/MM/AAA</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BillingArtist;
