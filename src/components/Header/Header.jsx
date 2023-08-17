import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import style from './Header.module.css'
import Logo from '../../assets/img/Header/logo.png'
import { useState } from 'react';
import Twitter from '../../assets/img/Login/Twitter.webp'
import Facebook from '../../assets/img/Login/Facebook.png'
import Google from '../../assets/img/Login/Google.png'

const Header = () => {

  // let TelNum = document.getElementById('TelInput'),

  // const = intlTelInput => ({
  //   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
  // };

  const [show, setShow] = useState(false);
  const [showSingUp, setShowSingUp] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSingUp = () => setShowSingUp(false);
  const handleShowSingUp = () => setShowSingUp(true);

  const handleCloseRegister = () => setShowRegister(false);

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowSingUp(false);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <Navbar className={style.Header} fixed='top'>
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            <img
              src={Logo}
              width="370"
              height="50"
              id={style.imgHeader}
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link className={style.NavButtons} onClick={handleShow}>Log in
              </Nav.Link>
              {/* Inicio Modal de login */}
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
              {/* Fin Modal de login */}
              <Nav.Link className={style.NavButtons} onClick={handleShowSingUp}>Sign up</Nav.Link>
            </Nav>
            {/* Inicio Modal de primer Sing Up */}
            <Modal
              show={showSingUp}
              onHide={handleCloseSingUp}
              keyboard={false}

            >
              <Modal.Body className={style.ModalBody}>
                <Modal.Title id={style.ModalTitle} >Sign Up</Modal.Title>
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
                  <Button type="submit" className={style.ModalButton} onClick={handleShowRegister}>
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
            {/* Inicio Modal de segundo Sing Up */}
            <Modal
              show={showRegister}
              onHide={handleCloseRegister}
              keyboard={false}

            >
              <Modal.Body className={style.ModalBody}>
                <Modal.Title id={style.ModalTitle} >Sign Up</Modal.Title>
                <Form onSubmit={submitHandler}>
                  <Form.Select aria-label="Default select example" className={style.ModalInput} >
                    <option>Seleccione su tipo de usuario</option>
                    <option value="1">Artista</option>
                    <option value="2">Usuario</option>
                    <option value="3">Establecimiento</option>
                  </Form.Select>
                  <Form.Group className={style.FormGroup} >
                    <Form.Control type="text" name='contry' placeholder="Pais" className={style.FormGroupInput} />
                    <Form.Control type="text" name='city' placeholder="Ciudad" className={style.FormGroupInput} />
                  </Form.Group>
                  <Form.Group className={style.FormGroup} controlId="number">
                    <Form.Control type="text" name='city' placeholder="+57" className={style.FormGroupInput} />
                    <Form.Control type="tel" name='number' placeholder="Numero de celular" className={style.FormGroupInput} id='TelInput' />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="user">
                    <Form.Control type="text" name='user' placeholder="Nombre de usuario" className={style.ModalInput} />
                  </Form.Group>
                  <Form.Group className={style.FormGroup} controlId="date">
                    <label>Fecha de nacimiento</label>
                    <Form.Control type="date" name='date' className={style.FormGroupInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="user">
                    <p>Preferencias de contenido</p>
                    <Form.Control type="text" name='user' placeholder="Añadir" className={style.FormGroupInput} />
                  </Form.Group>
                  <Button type="submit" className={style.ModalButton}>
                    Finalizar
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
            {/* Fin Modal de Sing Up */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
