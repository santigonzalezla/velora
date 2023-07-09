import style from './Company.module.css'
import Header from "../Header/Header";
import CarruselCompany from './CarruselCompany'
import BenefitsCompany from './BenefitsCompany';
import SesionsCompany from './SesionsCompany';
import ServicesCompany from './ServicesCompany';
import Footer from '../Footer/Footer';

const Company = () => {
  return (
    <div id={style.Company}>
      <Header />
      <CarruselCompany />
      <BenefitsCompany />
      <SesionsCompany />
      <ServicesCompany />
      <Footer />
    </div>
  );
}

export default Company;
