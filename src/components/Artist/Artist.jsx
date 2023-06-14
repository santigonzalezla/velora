import style from './Artist.module.css'
import Header from '../Header/Header'
import CarruselArtist from './CarruselArtist'
import BenefitsArtist from './BenefitsArtist';
import ServicesArtist from './ServicesArtist';
import SesionsArtist from './SesionsArtist';

const Artist = () => {
  return (
    <div id={style.Artist}>
      <Header />
      <CarruselArtist />
      <BenefitsArtist />
      <SesionsArtist />
      <ServicesArtist />
    </div>
  );
}

export default Artist;
