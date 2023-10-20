import style from './HomeApp.module.css'
import SideBar from '../SideBar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Billing/Logo.png'
import { Link } from 'react-router-dom';
import HistoralBilling from './HistoralBilling';

const Billing = () => {
  return (
    <div id={style.Billings}>
      <SideBar />
      <section id={style.BillingContainer} >
        <Container fluid>
          <Row id={style.BillingRow}>
            <Col md='4' >
              <article className={style.CoinsItem}>
                <section id={style.UsdBilling}>
                  <p>35 USD</p>
                </section>
                <span>Valor total transaciones</span>
              </article>
            </Col>
            <Col md='4' className={style.BillingItems}>
              <section id={style.Credits}>
                <div id={style.AvailableCredits}>
                  <p>1 Crédito</p>
                  <span>Créditos disponibles</span>
                </div>
                <div id={style.CreditsBuy}>
                  <Link to='/BuyCoins'>
                    Comprar Créditos
                  </Link>
                </div>
              </section>
            </Col>
            <Col md='4' className={style.BillingItems}>
              <img src={Logo} alt="" id={style.BillingLogo} />
            </Col>
          </Row>
        </Container>
        <section id={style.HistoralBilling}>
          <section>
            <h5>Historial de  transacciones</h5>
          </section>
          <HistoralBilling />
        </section>
      </section>
    </div>
  );
}

export default Billing;
