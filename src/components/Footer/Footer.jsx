import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import style from './Footer.module.css'
import VeloraLogo from '../../assets/img/Footer/VeloraLogo.png'


const Footer = () => {
  return (
    <Navbar expand="lg" id={style.Footer}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            id={style.Brand}
            src={VeloraLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Row></Row>
        <Nav className={style.NavItem} >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className={style.NavItem}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className={style.NavItem}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
