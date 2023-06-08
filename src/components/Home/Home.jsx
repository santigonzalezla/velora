import Carrusel from "./Carrusel";
import Hero from "./Hero";
import style from './Home.module.css'

const Home = () => {
  return (
    <div id={style.Home}>
      <Carrusel />
      <Hero />
    </div>
  );
}

export default Home;
