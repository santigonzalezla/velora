import { Container, Navbar, Nav } from 'react-bootstrap';
import style from './Header.module.css'
import Logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <Navbar className={style.Header} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="250"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link className={style.NavButtons}>Log in</Nav.Link>
            <Nav.Link className={style.NavButtons}>Sing up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
