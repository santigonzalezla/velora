import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import style from './Footer.module.css';
import VeloraLogo from '../../assets/img/Footer/footerlogo.png';
import Translate from '../../assets/img/Footer/Translate.png';
import Twiter from '../../assets/img/Footer/twiter.png';
import Tictoc from '../../assets/img/Footer/ticktok.png';
import Facebook from '../../assets/img/Footer/facebook.png';

const Footer = () => {
    return (
        <Navbar expand="lg" id={style.Footer}>
            <Container className={style.FooterContainer}>
                <Row className={style.FooterContainerTop}>
                    <Col xs='12' sm='2' md='' lg='1' id={style.Logo}>
                        <Navbar.Brand as={Link} to='/'>
                            <img
                                id={style.Brand}
                                src={VeloraLogo}
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col xs='12' sm='2' md='' lg='2' className={style.NavItem}>
                        <Nav.Link as={Link} to='/Terms' className={style.NavTitle}>Terms of service</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Privacy Policy</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Terms of Use</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Acceptable use Policy</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Complaints Policy</Nav.Link>
                    </Col>
                    <Col xs='12' sm='2' md='' lg='3' className={style.NavItem}>
                        <Nav.Link as={Link} to='/Terms' className={style.NavTitle}>Terms of service</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Disclosure Statement</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Anti-slavery & Anti-Trafficking statement 2022</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Safety & Transparency Center</Nav.Link>
                        <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Standard Contract between Fan and Creator</Nav.Link>
                    </Col>
                    <Col xs='12' sm='2' md='' lg='2' className={style.NavItem}>
                        <Nav.Link as={Link} to='/Help' className={style.NavTitle}>Help</Nav.Link>
                        <Nav.Link as={Link} to='/Help' className={style.NavLink}>About</Nav.Link>
                        <Nav.Link as={Link} to='/Help' className={style.NavLink}>Support</Nav.Link>
                        <Nav.Link as={Link} to='/Help' className={style.NavLink}>Cookies</Nav.Link>
                        <Nav.Link as={Link} to='/Help' className={style.NavLink}>DMCA Takedown Policy</Nav.Link>
                    </Col>
                    <Col xs='12' sm='2' md='' lg='2' className={style.NavItem}>
                        <div>
                            <img src={Translate} alt="" width={20}/>
                            <select className={style.Dropdown}>
                                <option value="1" className={style.Dropdown}>Spanish</option>
                                <option value="2" className={style.Dropdown}>English</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row className={style.FooterContainerBottom}>
                    <Col>
                        <Nav.Link><span>@2023 Velora Room</span></Nav.Link>
                    </Col>
                    <Col>
                        <div id={style.Icons}>
                            <Nav.Link><img src={Twiter} alt="" className={style.Icons}/></Nav.Link>
                            <Nav.Link><img src={Tictoc} alt="" className={style.Icons}/></Nav.Link>
                            <Nav.Link><img src={Facebook} alt="" className={style.Icons}/></Nav.Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Footer;
