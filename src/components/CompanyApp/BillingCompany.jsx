import Style from './CompanyApp.module.css'
import SideBarCompany from './SideBarCompany';
import { Row, Col, Container } from "react-bootstrap";
import Logo from '../../assets/img/CompanyApp/Billing/Logo.png'


const BillingCompany = () => {
  return (
    <div id={Style.CompanyApp}>
      <SideBarCompany />
      <Container id={Style.CompanyAppContainer}>
        <section id={Style.Billinghead}>
          <h3>Billings</h3>
          <img src={Logo} alt="" width={400} />
        </section>
      </Container>
    </div>
  );
}

export default BillingCompany;
