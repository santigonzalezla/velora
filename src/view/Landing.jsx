import Header from '../components/Header/Header'
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import {useState} from 'react';

const Landing = () => {

    const [test, setTest] = useState(false)
    const handleSignIn = () =>
    {
        setTest(!test)
    }

    return (
        <>
            <Header signUpClicked={test} signUpClosed={handleSignIn}/>
            <Home handleSignIn={handleSignIn}/>
            <Footer/>
        </>
    );
}

export default Landing;
