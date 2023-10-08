import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import VeloraLogo from '../../assets/img/Footer/VeloraLogo.png'
import Translate from '../../assets/img/Footer/Translate.png'
import Twiter from '../../assets/img/Footer/twiter.png'
import Tictoc from '../../assets/img/Footer/ticktok.png'
import Facebook from '../../assets/img/Footer/facebook.png'

const Footer = () => {
  return (
    <Navbar expand="lg" id={style.Footer}>
      <Container>
        <Row>
          <Col xs='12' sm='2' md='' lg='' id={style.Logo} >
            <Navbar.Brand as={Link} to='/' >
              <img
                id={style.Brand}
                src={VeloraLogo}
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>
          <Col xs='3' sm='2' md='' lg='' className={style.NavItem} >
            <Nav.Link as={Link} to='/Terms'>Términos de Servicio</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Política de Privacidad</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Uso Aceptable</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Política de Quejas</Nav.Link>
          </Col>
          <Col xs='2' sm='2' md='' lg='' className={style.NavItem} >
            <Nav.Link as={Link} to='/Terms' >Términos de Servicio</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Declaración de Divulgación</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Contra la Esclavitud y Tráfico</Nav.Link>
          </Col>
          <Col xs='2' sm='2' md='' lg='' className={style.NavItem} >
            <Nav.Link as={Link} to='/Help' >Ayuda</Nav.Link>
            <Nav.Link as={Link} to='/Help' className={style.NavLink}>Acerca de</Nav.Link>
            <Nav.Link as={Link} to='/Help' className={style.NavLink}>Soporte</Nav.Link>
            <Nav.Link as={Link} to='/Help' className={style.NavLink}>Política DMCA</Nav.Link>
          </Col>

          <Col xs='2' sm='2' md='' lg='' className={style.NavItem} >
            <div>
              <img src={Translate} alt="" width={20} />
              <select className={style.Dropdown}>
                <option value="1" className={style.Dropdown}>Spanish</option>
                <option value="2" className={style.Dropdown}>English</option>
              </select>
            </div>
            <div id={style.Icons}>
              <Nav.Link ><img src={Twiter} alt="" className={style.Icons} /></Nav.Link>
              <Nav.Link ><img src={Tictoc} alt="" className={style.Icons} /></Nav.Link>
              <Nav.Link ><img src={Facebook} alt="" className={style.Icons} /></Nav.Link>
            </div>
            <Nav.Link >@2023 Velora Room</Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
