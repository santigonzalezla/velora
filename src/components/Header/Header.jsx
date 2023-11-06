import {Link, useNavigate} from 'react-router-dom';
import {Container, Navbar, Nav, Button, Modal, Form} from 'react-bootstrap';
import style from './Header.module.css'
import Logo from '../../assets/img/Header/logo.png'
import {useState, useEffect, useMemo} from 'react';
import Twitter from '../../assets/img/Login/Twitter.webp'
import Facebook from '../../assets/img/Login/Facebook.png'
import Google from '../../assets/img/Login/Google.png'
import {Cookies} from 'react-cookie'
import jwt from 'jwt-decode'

const apiURL = import.meta.env.VITE_AUTH_API_URL;

const cookies = new Cookies();

async function getContriesData() {
    const url = 'https://countriesnow.space/api/v0.1/countries/info?returns=flag,dialCode'
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

async function getCitiesofCountry(country) {
    const url = 'https://countriesnow.space/api/v0.1/countries/cities'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({country})
    }
    const request = new Request(url, options);
    const response = await fetch(request);
    const data = await response.json();

    return data.data;
}

async function signUp(username, password, email, first_name, last_name, phone, country, city, preferences, type, birth_date, bio) {
    const url = `${apiURL}/signup`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            email,
            first_name,
            last_name,
            phone,
            country,
            city,
            preferences,
            type,
            birth_date,
            bio
        })
    }
    const request = new Request(url, options);
    const response = await fetch(request, {credentials: 'include'});

    if (response.ok) {
        const data = await response.json();
        cookies.set('auth-cookie', data.data.token)
        return true;
    } else {
        return false;
    }
}

async function logIn(username, password) {
    const url = `${apiURL}/login`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }
    const request = new Request(url, options);
    const response = await fetch(request, {credentials: 'include'});
    if (response.ok) {
        const data = await response.json();
        cookies.set('auth-cookie', data.data.token)
        return data.data.token;
    } else {
        return false;
    }
}

const Header = (props) => {
    const navigate = useNavigate();

    // let TelNum = document.getElementById('TelInput'),

    // const = intlTelInput => ({
    //   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
    // };

    const [show, setShow] = useState(false);
    const [showSingUp, setShowSingUp] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleClose = () => setShow(false);
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
    const [type_preferences, setPreferences] = useState("");
    const [type, setType] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [bio, setBio] = useState("");

    const [countryList, setCountryList] = useState([]);
    const [cityList, setCityList] = useState([]);

    const handleCloseSingUp = () => {
        setShowSingUp(false)
        props.signUpClosed()
    }
    const handleShowSingUp = () => {
        setShowSingUp(true);
        props.signUpClosed()
        getContriesData().then(data => {
            setCountryList(data)
        })
    }
    const handleCloseRegister = () => setShowRegister(false);

    const handleShowRegister = () => {
        setShowRegister(true);
        setShowSingUp(false);
    }


    const handleLogIn = async (e) => {
        e.preventDefault();
        await logIn(username, password).then(success => {
            if (success) {
                alert("Login successful");
                const token = cookies.get('auth-cookie');
                const decoded = jwt(token);
                const t = decoded.userType;
                if (t === 'artista') {
                    alert("SignUp successful Artista");
                    navigate('/artistapp')
                } else if (t === 'cliente') {
                    alert("SignUp successful Client");
                    navigate('/home')
                }
            } else {
                alert("Login failed");
            }
        });
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        await signUp(username, password, email, firstName, lastName, '(' + countryCode + ') ' + phone, country, city, type_preferences, type, birthDate, bio).then(success => {
            if (success) {
                if (type === 'artist') {
                    alert("SignUp successful Artista");
                    navigate('/artistapp')
                } else if (type === 'cliente') {
                    alert("SignUp successful Client");
                    navigate('/home')
                }
            } else {
                alert("SignUp failed");
            }
        })
    }

    const checkUserToken = async () => {
        try {
            const token = cookies.get('auth-cookie');
            const decoded = jwt(token);
            if (decoded.userType === 'Artista') {
                const response = await fetch(`${apiURL}/verifyToken`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"tokenJWT": cookies.get('auth-cookie') || ''}),
                });

                if (response.ok) {
                    navigate('/home');
                }
            }
        } catch (error) {
        }
    }

    const handleCountrySelect = (e) => {
        setCountry(e.target.value)
        getCitiesofCountry(e.target.value).then(data => {
            setCityList(data)
        })

    }

    const handleSelectUserT = (e) => {
        setType(e.target.value)
    }

    useEffect(() => {
        setShowSingUp(props.signUpClicked)
        checkUserToken();
    })

    return (
        <div>
            <Navbar className={style.Header} fixed='top' >
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>
                        <img
                            src={Logo}
                            width="100%"
                            height="85"
                            style={{objectFit: 'cover'}}
                            id={style.imgHeader}
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                            <Nav.Link className={style.NavButtons} onClick={handleShow}>Login
                            </Nav.Link>
                            {/* Inicio Modal de login */}
                            <Modal
                                show={show}
                                onHide={handleClose}
                                keyboard={false}
                            >
                                <Modal.Body className={style.ModalBody}>
                                    <Modal.Title id={style.ModalTitle}>Iniciar sesión</Modal.Title>
                                    <Form onSubmit={handleLogIn}>
                                        <Form.Group className="mb-3" controlId="username">
                                            <Form.Control type="user" name='username' placeholder="nombre de Usuario"
                                                          className={style.ModalInput}
                                                          onChange={e => setUserName(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Control type="password" name='password' placeholder="Contraseña"
                                                          className={style.ModalInput}
                                                          onChange={e => setPassword(e.target.value)}/>
                                        </Form.Group>
                                        <Button type="submit" className={style.ModalButton}>
                                            Iniciar Sesión
                                        </Button>
                                        <p>O Ingresa con:</p>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer className={style.Modal} id={style.ModalFooter}>
                                    <img src={Twitter} alt="" className={style.icons}/>
                                    <img src={Facebook} alt="" className={style.icons}/>
                                    <img src={Google} alt="" className={style.icons}/>
                                </Modal.Footer>
                            </Modal>
                            {/* Fin Modal de login */}
                            <Nav.Link className={style.NavButtons} onClick={handleShowSingUp}>Sign Up</Nav.Link>
                        </Nav>
                        {/* Inicio Modal de primer Sing Up */}
                        <Modal
                            show={showSingUp}
                            onHide={handleCloseSingUp}
                            keyboard={false}

                        >
                            <Modal.Body className={style.ModalBody}>
                                <Modal.Title id={style.ModalTitle}>Iniciar sesión</Modal.Title>
                                <p>¡Inspira, Conecta, Crea! Únete a nuestra comunidad artística hoy mismo y deja que tu
                                    creatividad vuele libremente.</p>
                                <Button type="submit" className={style.ModalButton} onClick={handleShowRegister}>
                                    Registrarse
                                </Button>
                                <p>O Ingresa con:</p>
                            </Modal.Body>
                            <Modal.Footer className={style.Modal} id={style.ModalFooter}>
                                <img src={Twitter} alt="" className={style.icons}/>
                                <img src={Facebook} alt="" className={style.icons}/>
                                <img src={Google} alt="" className={style.icons}/>
                            </Modal.Footer>
                        </Modal>
                        {/* Inicio Modal de segundo Sing Up */}
                        <Modal
                            show={showRegister}
                            onHide={handleCloseRegister}
                            keyboard={false}

                        >
                            <Modal.Body className={style.ModalBody}>
                                <Modal.Title id={style.ModalTitle}>Registrarse</Modal.Title>
                                <Form onSubmit={handleSignUp}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Control type="text" name='name' placeholder="Nombre"
                                                      className={style.ModalInput}
                                                      onChange={e => setFirstName(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="lastname">
                                        <Form.Control type="text" name='lastname' placeholder="Apellido"
                                                      className={style.ModalInput}
                                                      onChange={e => setLastName(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Control type="password" name='password' placeholder="Contraseña"
                                                      className={style.ModalInput}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Control type="password" name='confirmPassword'
                                                      placeholder="Confirme su contraseña" className={style.ModalInput}
                                                      onChange={e => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Select aria-label="Default select example" className={style.ModalInput}
                                                 onChange={handleSelectUserT}>
                                        <option>Seleccione su tipo de usuario</option>
                                        <option value="artista">Artista</option>
                                        <option value="cliente">Usuario</option>
                                        <option value="establecimiento">Establecimiento</option>
                                    </Form.Select>
                                    <Form.Group className={style.FormGroup}>
                                        <Form.Select type="text" name='contry' className={style.FormGroupInput}
                                                     onChange={handleCountrySelect}>
                                            <option value="null" selected disabled hidden>Pais</option>
                                            {
                                                countryList.map((country) => (
                                                    <option value={country.name}>{country.name}</option>
                                                ))
                                            }
                                        </Form.Select>
                                        <Form.Select type="text" name='city' className={style.FormGroupInput}
                                                     onChange={e => setCity(e.target.value)}>
                                            <option value="null" selected disabled hidden>Ciudad</option>
                                            {cityList.map((city) => (
                                                <option value={city}>{city}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className={style.FormGroup} controlId="number">
                                        <Form.Select type="text" name='city' placeholder="+57"
                                                     className={style.FormGroupInput}
                                                     onChange={e => setCountryCode(e.target.value)}>
                                            <option value="null" selected disabled hidden>Codigo de pais</option>
                                            {
                                                countryList.map((country) => (
                                                    country.dialCode && <option
                                                        value={country.dialCode}>{country.name + ' | (' + (country.dialCode.startsWith("+") ? country.dialCode : "+" + country.dialCode) + ')'}</option>
                                                ))
                                            }
                                        </Form.Select>
                                        <Form.Control type="text" name='number' placeholder="Numero de celular"
                                                      className={style.FormGroupInput} id='TelInput'
                                                      onChange={e => setPhone(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="user">
                                        <Form.Control type="text" name='user' placeholder="Nombre de usuario"
                                                      className={style.ModalInput}
                                                      onChange={e => setUserName(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Control type="user" name='username' placeholder="Email"
                                                      className={style.ModalInput}
                                                      onChange={e => setEmail(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className={style.FormGroup} controlId="date">
                                        <label>Fecha de nacimiento</label>
                                        <Form.Control type="date" name='date' className={style.FormGroupInput}
                                                      onChange={e => setBirthDate(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="user">
                                        <p>Preferencias de contenido</p>
                                        <Form.Control type="text" name='user' placeholder="Añadir"
                                                      className={style.FormGroupInput}
                                                      onChange={e => setPreferences(e.target.value)}/>
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
