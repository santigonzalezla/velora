import Style from './CompanyApp.module.css'
import SideBarCompany from "./SideBarCompany";
import { Row, Col, Container } from "react-bootstrap";
import Logo from '../../assets/img/CompanyApp/Dashboard/logo.png'
import Google from '../../assets/img/CompanyApp/Dashboard/Google.png'
import grafic from '../../assets/img/CompanyApp/Dashboard/grafic.png'

const CompanyApp = () => {
  return (
    <div id={Style.CompanyApp}>
      <SideBarCompany />
      <Container id={Style.CompanyAppContainer}>
        <Row >
          <Col sm='2' className={Style.TransactionsData}>
            <div>
              <h4>35 USD</h4>
            </div>
            <p>Valor total transaciones</p>
          </Col>
          <Col sm='2' className={Style.TransactionsData}>
            <div >
              <h4>3</h4>
            </div>
            <p>Posición publicitaria</p>
          </Col>
          <Col sm='8' id={Style.Logo}>
            <img src={Logo} alt="" />
          </Col>
        </Row>
        <Row>
          <Col sm='3'>
            <section>
              <div className={Style.BalanceBox}>
                <img src={Google} alt="" width={150} />
                <p><span>país-cuidad</span></p>
                <p>establecimiento</p>
                <p>lorem ipsum</p>
                <p>negocioabf@dominio.com</p>
              </div>
            </section>
            <section>
              <div className={Style.BalanceBox}>
                <p><span>Inversión publicidad</span></p>
                <h4>35 USD</h4>
                <p>+12% <span>mes anterior</span></p>
              </div>
            </section>
            <section>
              <div className={Style.BalanceBox}>
                <p><span>Artistas Conectados</span></p>
                <h4>35 USD</h4>
                <p>+12% <span>mes anterior</span></p>
              </div>
            </section>
          </Col>
          <Col sm='9'>
            <section className={Style.BalanceBox2}>
              <div className={Style.BalanceBox2Item}>
                <p><span>Clicks</span></p>
                <h4>35</h4>
                <p><span>+12% mes anterior</span></p>
              </div>
              <div className={Style.BalanceBox2Item}>
                <p><span>Clicks</span></p>
                <h4>35</h4>
                <p><span>+12% mes anterior</span></p>
              </div>
              <div className={Style.BalanceBox2Item}>
                <p><span>Clicks</span></p>
                <h4>35</h4>
                <p><span>+12% mes anterior</span></p>
              </div>
            </section>
            <section>
              <img src={grafic} alt="" width={800} />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CompanyApp;
