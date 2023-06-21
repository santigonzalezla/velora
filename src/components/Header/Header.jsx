import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import style from './Header.module.css'
import Logo from '../../assets/img/Header/logo.png'
import { useState } from 'react';
import Twitter from '../../assets/img/Login/Twitter.webp'
import Facebook from '../../assets/img/Login/Facebook.png'
import Google from '../../assets/img/Login/Google.png'

const Header = () => {

  const [show, setShow] = useState(false);
  const [showSingUp, setShowSingUp] = useState(false);
  const [shorRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSingUp = () => setShowSingUp(false);
  const handleShowSingUp = () => setShowSingUp(true);

  const submitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <Navbar className={style.Header} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          <img
            src={Logo}
            width="370"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link className={style.NavButtons} onClick={handleShow}>Log in
            </Nav.Link>
            <Modal
              show={show}
              onHide={handleClose}
              keyboard={false}

            >
              <Modal.Body className={style.ModalBody}>
                <Modal.Title id={style.ModalTitle} >Login</Modal.Title>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Control type="user" name='username' placeholder="nombre de Usuario" className={style.ModalInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" name='password' placeholder="Contraseña" className={style.ModalInput} />
                  </Form.Group>
                  <Button type="submit" className={style.ModalButton}>
                    Iniciar Sesión
                  </Button>
                  <p>O Ingresa con:</p>
                </Form>
              </Modal.Body>
              <Modal.Footer className={style.Modal} id={style.ModalFooter}>
                <img src={Twitter} alt="" className={style.icons} />
                <img src={Facebook} alt="" className={style.icons} />
                <img src={Google} alt="" className={style.icons} />
              </Modal.Footer>
            </Modal>
            <Nav.Link className={style.NavButtons} onClick={handleShowSingUp}>Sing up</Nav.Link>
          </Nav>
          <Modal
            show={showSingUp}
            onHide={handleCloseSingUp}
            keyboard={false}

          >
            <Modal.Body className={style.ModalBody}>
              <Modal.Title id={style.ModalTitle} >Sing Up</Modal.Title>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control type="text" name='name' placeholder="Nombre" className={style.ModalInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                  <Form.Control type="text" name='lastname' placeholder="Apellido" className={style.ModalInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Control type="password" name='password' placeholder="Contraseña" className={style.ModalInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Control type="password" name='password' placeholder="Confirme su contraseña" className={style.ModalInput} />
                </Form.Group>
                <Button type="submit" className={style.ModalButton}>
                  Registrarse
                </Button>
                <p>O Ingresa con:</p>
              </Form>
            </Modal.Body>
            <Modal.Footer className={style.Modal} id={style.ModalFooter}>
              <img src={Twitter} alt="" className={style.icons} />
              <img src={Facebook} alt="" className={style.icons} />
              <img src={Google} alt="" className={style.icons} />
            </Modal.Footer>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
