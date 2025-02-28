import style from './HomeApp.module.css'

import {Link, useNavigate} from 'react-router-dom';

import {Button, Modal, Nav, Form, Overlay} from 'react-bootstrap';
import {useState, useRef, useEffect} from 'react';
import Porfile from '../../assets/img/HomeApp/SideBar/Eclipse.png'
import User from '../../assets/img/HomeApp/SideBar/User.png'
import Dashboard from '../../assets/img/HomeApp/SideBar/dashboard.png';
import Home from '../../assets/img/HomeApp/SideBar/home.png'
import Notification from '../../assets/img/HomeApp/SideBar/notification.png'
import Chat from '../../assets/img/HomeApp/SideBar/chat.png'
import Billing from '../../assets/img/HomeApp/SideBar/Billing.png'
import Subscription from '../../assets/img/HomeApp/SideBar/Subscriptions.png'
import More from '../../assets/img/HomeApp/SideBar/more.png'

import {Cookies} from 'react-cookie'
import jwt from 'jwt-decode'

const apiURL = import.meta.env.VITE_AUTH_API_URL;
const cookies = new Cookies();

import Settings from '../../assets/img/HomeApp/SideBar/settings.png'
import Transactions from '../../assets/img/HomeApp/SideBar/transactions.png'
import Suports from '../../assets/img/HomeApp/SideBar/suports.png'
import Logout from '../../assets/img/HomeApp/SideBar/logout.png'
import socket from '../../utils/notificationSocket';


// Controlls for more overlay

const getUserInfo = async () => {
    const token = cookies.get('auth-cookie');
    const headers = {
        'Authorization': 'Bearer ' + (token || '')
    };
    const response = await fetch(`${apiURL}/profile/`, {headers});

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        return null;
    }
}

const logout = async () => {
    const response = await fetch(`${apiURL}/logout`, {credentials: 'include'});
    if (response.ok) {
        return true;
    } else {
        return null;
    }
}

const updateProfile = async (first_name, last_name, password, city, country, phone, birth_date) => {
    const token = cookies.get('auth-cookie');
    const decoded = jwt(token);
    const response = await fetch(`${apiURL}/${decoded.username}`, {
        method: 'PATCH', headers: {
            'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (token || '')
        }, body: JSON.stringify({first_name, last_name, password, city, country, phone, birth_date}),
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        return null;
    }
}

const SideBar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [first_name, setName] = useState('');
    const [birth_date, setBirthDate] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState('');
    const [notification, setNotification] = useState(false);
    const targetNotification = useRef(null);

    const handleProfileClicked = async () => {
        const data = await getUserInfo();
        console.log(data);
        setName(data.first_name);
        setLastname(data.last_name);
        setUsername(data.username);
        setBirthDate(data.birth_date);
        setCity(data.city);
        setCountry(data.country);
        setPhone(data.phone);
        handleShow();
    }

    const handleLogout = () => {
        cookies.remove('auth-cookie');
        logout();
        navigate('/')
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        updateProfile(first_name, lastname, password, city, country, phone, birth_date).then(success => {
            if (success) {
                alert("Profile updated");
            } else {
                alert("Error updating profile");
            }
        });
    }

    const [overlay, setOverlay] = useState(false);
    const target = useRef(null);

    return (<main id={style.SideBar}>
        <div id={style.SideBarIcons}>
            {/*
           <Nav.Link onClick={handleProfileClicked}>
                <img src={Porfile} alt="" className={style.SideBarItem}/>
            </Nav.Link>
            */}
            {/* Start Modal Porfile */}
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Body>
                    <Modal.Title id={style.ModalTitle}><p>Mi Perfil</p></Modal.Title>
                    <section id={style.ModalImg}>
                        <img src={User} width={100}/>
                        <p>Cliente</p>
                    </section>
                    <Form id={style.ModalForm} onSubmit={handleUpdateProfile}>
                        <section className={style.ModalInput}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Control type="text" name='username' placeholder="Nombre" value={first_name}
                                              className={style.ModalInput}
                                              onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Control type="text" name='lastname' placeholder="Apellido" value={lastname}
                                              className={style.ModalInput}
                                              onChange={(e) => setLastname(e.target.value)}/>
                            </Form.Group>
                        </section>
                        <section className={style.ModalInput}>
                            <p>Fecha de nacimiento</p>
                            <Form.Group className="mb-3" controlId="date">
                                <Form.Control type="date" className={style.ModalInput} value={birth_date} disabled/>
                            </Form.Group>
                        </section>
                        <section className={style.ModalInput}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="Pais" value={country} id={style.CountryInput}
                                              onChange={(e) => setCountry(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="Ciudad" value={city} id={style.CityInput}
                                              onChange={(e) => setCity(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="+57 | número de celular" value={phone}
                                              onChange={(e) => setPhone(e.target.value)}/>
                            </Form.Group>
                        </section>
                        <section className={style.ModalInput}>
                            <Form.Group className="mb-3">
                                <p>Nombre de Usuario</p>
                            </Form.Group>
                            <p>@{username}</p>
                        </section>
                        <section className={style.ModalInput}>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Modificar Contraseña"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Confirmar Contraseña"
                                              onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                        </section>
                        <section id={style.ModalBtnContainer}>
                            <Button type="submit" id={style.ModalBtn}>
                                Guardar Cambios
                            </Button>
                        </section>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* End Modal porfile */}
            <Link to={'/home'}>
                <img src={Dashboard} alt="" className={style.SideBarItem}/>
            </Link>
            <Link ref={targetNotification} onClick={() => setNotification(!notification)}>
                <img src={Notification} alt="" className={style.SideBarItem}/>
            </Link>
            {/* start notification overlay */}
            <Overlay target={targetNotification.current} show={notification} placement="right">
                {({
                      placement: _placement,
                      arrowProps: _arrowProps,
                      show: _show,
                      popper: _popper,
                      hasDoneInitialMeasure: _hasDoneInitialMeasure,
                      ...props
                  }) => (<div
                    id={style.Notification}
                    {...props}
                    style={{
                        position: 'absolute',
                        backgroundColor: '#F9F9F9',
                        padding: '2px 10px',
                        color: '#373B56', ...props.style,
                    }}
                >
                    <div className={style.notificationHead}>
                        <h4>Notification</h4>
                        <img src={Settings} alt=""/>
                    </div>
                    <section>
                        <div className={style.notificationItem}>
                            <img src={User} alt=""/>
                            <p>@beautifulmouse112</p>
                            <p>ahora</p>
                        </div>
                        <span>magnis dis parturient. Purus faucibus ornare ... </span>
                    </section>
                    <section>
                        <div className={style.notificationItem}>
                            <img src={User} alt=""/>
                            <p>@beautifulmouse112</p>
                            <p>ahora</p>
                        </div>
                        <span>magnis dis parturient. Purus faucibus ornare ... </span>
                    </section>
                    <section>
                        <div className={style.notificationItem}>
                            <img src={User} alt=""/>
                            <p>@beautifulmouse112</p>
                            <p>ahora</p>
                        </div>
                        <span>magnis dis parturient. Purus faucibus ornare ... </span>
                    </section>
                    <section>
                        <div className={style.notificationItem}>
                            <img src={User} alt=""/>
                            <p>@beautifulmouse112</p>
                            <p>ahora</p>
                        </div>
                        <span>magnis dis parturient. Purus faucibus ornare ... </span>
                    </section>
                </div>)}
            </Overlay>
            {/* End notification overlay */}
            <Link to={'/Chats'}>
                <img src={Chat} alt="" className={style.SideBarItem}/>
            </Link>
            <Link to={'/Billing'}>
                <img src={Billing} alt="" className={style.SideBarItem}/>
            </Link>
            <Link to={'/Subscriptions'}>
                <img src={Subscription} alt="" className={style.SideBarItem}/>
            </Link>

        </div>
        <div id={style.SideBarMore} ref={target} onClick={() => setOverlay(!overlay)}>
            <img src={More} alt="" className={style.SideBarItem}/>
        </div>
        {/* start More overlay */}
        <Overlay target={target.current} show={overlay} placement="right">
            {({
                  placement: _placement,
                  arrowProps: _arrowProps,
                  show: _show,
                  popper: _popper,
                  hasDoneInitialMeasure: _hasDoneInitialMeasure,
                  ...props
              }) => (<div
                id={style.Overlay}
                {...props}
                style={{
                    position: 'absolute',
                    backgroundColor: '#F9F9F9',
                    padding: '2px 10px',
                    color: '#373B56',
                    borderRadius: 5, ...props.style,
                }}
            >
                <div className={style.overlayItem}>
                    <img src={Settings} alt="" className={style.iconsOverlay}/>
                    <p>Configuración</p>
                </div>
                <div className={style.overlayItem}>
                    <img src={Transactions} alt="" className={style.iconsOverlay}/>
                    <p>Transacciones</p>
                </div>
                <div className={style.overlayItem}>
                    <img src={Suports} alt="" className={style.iconsOverlay}/>
                    <p>Soporte</p>
                </div>
                <div className={style.overlayItem} onClick={handleLogout}>
                    <img src={Logout} alt="" className={style.iconsOverlay}/>
                    <p>Cerrar Sesión</p>
                </div>
            </div>)}
        </Overlay>
        {/* End More overlay */}
    </main>);
}

export default SideBar;
