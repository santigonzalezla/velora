import style from './Client.module.css'
import Header from "../Header/Header";
import CarruselClient from "./CarruselClient";
import Benefits from './Benefits.jsx';
import Sesions from './Sesions';
import Services from './Services'
import Footer from '../Footer/Footer';

const Client = () => {
  return (
    <div id={style.Client}>
      <Header />
      <CarruselClient />
      <Benefits />
      <Sesions />
      <Services />
      <Footer />
    </div>
  );
}

export default Client;
