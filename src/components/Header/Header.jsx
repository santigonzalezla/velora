import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import style from './Header.module.css'
import Logo from '../../assets/img/Header/logo.png'
import { useState } from 'react';
import Twitter from '../../assets/img/Login/Twitter.webp'
import Facebook from '../../assets/img/Login/Facebook.png'
import Google from '../../assets/img/Login/Google.png'
import { useEffect } from 'react';


const apiURL = "https://velora-room-auth-ezoaw2zi7a-uc.a.run.app/api"
async function signUp( username, password, email, first_name, last_name, phone, country, city, preferences, type, birth_date, bio ) {
    const url = `${apiURL}/signup`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email, first_name, last_name, phone, country, city, preferences, type, birth_date, bio })
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return await data;
}

async function logIn( email, password ) {
  const url = `${apiURL}/login`;
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return await data;
}

const Header = (props) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [showSingUp, setShowSingUp] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [preferences, setPreferences] = useState("");
  const [type, setType] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [bio, setBio] = useState("");

  const handleCloseSingUp = () => {
    setShowSingUp(false)
    props.signUpClosed()
  }
  const handleShowSingUp = () => {
    setShowSingUp(true);
    props.signUpClosed()
  }
  const handleCloseRegister = () => setShowRegister(false);

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowSingUp(false);
  }


  const handleLogIn = async (e) => {
    e.preventDefault();
    await logIn(email, password).then(res => {
      if (res.status == "success") {
        alert("Login successful");
        navigate('/home')
      }else{
        console.log(res)
        alert("Login failed");
      }
    });
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    await signUp(username, password, email, firstName, lastName, phone, country, city, preferences, type, birthDate, bio).then(res => {
      if (res.status == "success") {
        alert("Login successful");
        navigate('/home')
      }else{
        alert("Login failed");
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Testing")
  }

  useEffect(() => {
    setShowSingUp(props.signUpClicked)
  })

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
              <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}

              >
                <Modal.Body className={style.ModalBody}>
                  <Modal.Title id={style.ModalTitle} >Login</Modal.Title>
                  <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Control type="user" name='username' placeholder="nombre de Usuario" className={style.ModalInput} onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control type="password" name='password' placeholder="Contraseña" className={style.ModalInput} onChange={e => setPassword(e.target.value)}/>
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
              <Nav.Link className={style.NavButtons} onClick={handleShowSingUp}>Sign up</Nav.Link>
            </Nav>
            <Modal
              show={showSingUp}
              onHide={handleCloseSingUp}
              keyboard={false}

            >
              <Modal.Body className={style.ModalBody}>
                <Modal.Title id={style.ModalTitle} >Sign Up</Modal.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" name='name' placeholder="Nombre" className={style.ModalInput} onChange={e => setFirstName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lastname">
                    <Form.Control type="text" name='lastname' placeholder="Apellido" className={style.ModalInput} onChange={e => setLastName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" name='password' placeholder="Contraseña" className={style.ModalInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" name='password' placeholder="Confirme su contraseña" className={style.ModalInput} onChange={e => setPassword(e.target.value)}/>
                  </Form.Group>
                  <Button className={style.ModalButton} onClick={handleShowRegister}>
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
            <Modal
              show={showRegister}
              onHide={handleCloseRegister}
              keyboard={false}

            >
              <Modal.Body className={style.ModalBody}>
                <Modal.Title id={style.ModalTitle} >Sign Up</Modal.Title>
                <Form onSubmit={handleSignUp}>
                  <Form.Select aria-label="Default select example" className={style.ModalInput} onChange={e => setType(e.target.value)}>
                    <option>Seleccione su tipo de usuario</option>
                    <option value="1">Artista</option>
                    <option value="2">Cliente</option>
                    <option value="3">Empresa</option>
                  </Form.Select>
                  <Form.Group className={style.FormGroup} >
                    <Form.Control type="text" name='contry' placeholder="Pais" className={style.FormGroupInput} onChange={e => setCountry(e.target.value)}/>
                    <Form.Control type="text" name='city' placeholder="Ciudad" className={style.FormGroupInput} onChange={e => setCity(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className={style.FormGroup} controlId="number">
                    <Form.Control type="text" name='city' placeholder="+57" className={style.FormGroupInput} onChange={e => setCountryCode(e.target.value)}/>
                    <Form.Control type="text" name='number' placeholder="Numero de celular" className={style.FormGroupInput} onChange={e => setPhone(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="user">
                    <Form.Control type="text" name='user' placeholder="Nombre de usuario" className={style.ModalInput} onChange={e => setUserName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="username">
                      <Form.Control type="user" name='username' placeholder="Email" className={style.ModalInput} onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                  <Form.Group className={style.FormGroup} controlId="date">
                    <label>Fecha de nacimiento</label>
                    <Form.Control type="date" name='date' className={style.FormGroupInput} onChange={e => setBirthDate(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="user">
                    <p>Preferencias de contenido</p>
                    <Form.Control type="text" name='user' placeholder="Añadir" className={style.FormGroupInput} onChange={e => setPreferences(e.target.value)}/>
                  </Form.Group>
                  <Button type="submit" className={style.ModalButton}>
                    Finalizar
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
