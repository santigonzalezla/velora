import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import VeloraLogo from '../../assets/img/Footer/VeloraLogo.png'
import Icons from '../../assets/img/Footer/Icon.png'


const Footer = () => {
  return (
    <Navbar expand="lg" id={style.Footer}>
      <Container>
        <Row>
          <Col xs='' sm='' md='2' lg=''>
            <Navbar.Brand as={Link} to='/' id={style.Brand}>
              <img
                src={VeloraLogo}
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>
          <Col xs='' sm='' md='' lg='' className={style.NavItem} >
            <Nav.Link as={Link} to='/Terms'>Terms of service</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Privacy Policy</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Terms of Use</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Acceptable use Policy</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Complaints Policy</Nav.Link>
          </Col>
          <Col xs='' sm='' md='3' lg='' className={style.NavItem} >
            <Nav.Link as={Link} to='/Terms' >Terms of service</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Disclosure Statement</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Anti-slavery & Anti-Trafficking</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Safety & Transparency Center</Nav.Link>
            <Nav.Link as={Link} to='/Terms' className={style.NavLink}>Standard Contract between Fan and Creator</Nav.Link>
          </Col>
          <Col xs='' sm='' md='' lg='' className={style.NavItem} >
            <Nav.Link as={Link} to='/Help' >Help</Nav.Link>
            <Nav.Link as={Link} to='/Help' className={style.NavLink}>About</Nav.Link>
            <Nav.Link as={Link} to='/Help' className={style.NavLink}>Support</Nav.Link>
            <Nav.Link as={Link} to='/Help' className={style.NavLink}>Cookies</Nav.Link>
            <Nav.Link as={Link} to='/Help' className={style.NavLink}>DMCA Takedown Policy</Nav.Link>
          </Col>

          <Col xs='' sm='' md='' lg='' className={style.NavItem} >
            <select className={style.Dropdown}>
              <option value="1" className={style.Dropdown}>Spanish</option>
              <option value="2" className={style.Dropdown}>English</option>
            </select>
            <Nav.Link ><img src={Icons} alt="" className={style.Icons} /></Nav.Link>
            <Nav.Link >@2023 Velora Room</Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
