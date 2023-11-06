import Carrusel from "./Carrusel";
import Hero from "./Hero";
import style from './Home.module.css'

const Home = ({handleSignIn}) =>
{
    return (
        <div id={style.Home}>
            <Carrusel handleSignIn={handleSignIn}/>
            <Hero/>
        </div>
    );
}

export default Home;
