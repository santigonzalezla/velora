import style from './Artist.module.css'
import Header from '../Header/Header'
import CarruselArtist from './CarruselArtist'
import BenefitsArtist from './BenefitsArtist';
import ServicesArtist from './ServicesArtist';
import SesionsArtist from './SesionsArtist';
import Footer from '../Footer/Footer';

const Artist = () => {
  return (
    <div id={style.Artist}>
      <Header />
      <CarruselArtist />
      <BenefitsArtist />
      <ServicesArtist />
      <Footer />
    </div>
  );
}

export default Artist;
