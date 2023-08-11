import style from './HomeApp.module.css'
import { Link } from 'react-router-dom';
import { Button, Modal, Nav, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Porfile from '../../assets/img/HomeApp/SideBar/Eclipse.png'
import User from '../../assets/img/HomeApp/SideBar/User.png'
import Home from '../../assets/img/HomeApp/SideBar/home.png'
import Notification from '../../assets/img/HomeApp/SideBar/notification.png'
import Chat from '../../assets/img/HomeApp/SideBar/chat.png'
import Billing from '../../assets/img/HomeApp/SideBar/Billing.png'
import Subscription from '../../assets/img/HomeApp/SideBar/Subscriptions.png'
import More from '../../assets/img/HomeApp/SideBar/more.png'
import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

const apiURL = import.meta.env.VITE_AUTH_API_URL;
const cookies = new Cookies();

const SideBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userData, setUserData] = useState({});

  const getUserInfo = async () => {
      const token = cookies.get('auth-cookie');
      const headers = { 'Authorization': 'Bearer ' + (token || '') };
      const decoded = jwt(token);
      const response = await fetch(`${apiURL}/profile/${decoded.username}`, { headers });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        return true;
      } else {
        return false;
      }
  }

  useEffect(() => {
    getUserInfo();
    console.log(userData);
  }, []);


  return (
    <main id={style.SideBar}>
      <div id={style.SideBarIcons}>
        <Nav.Link onClick={handleShow}>
          <img src={Porfile} alt="" className={style.SideBarItem} />
        </Nav.Link>
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
        >
          <Modal.Body >
            <Modal.Title id={style.ModalTitle} ><p>Mi Perfil</p></Modal.Title>
            <section id={style.ModalImg}>
              <img src={User} width={100} />
              <p>Cliente</p>
            </section>
            <Form id={style.ModalForm}>
              <section className={style.ModalInput}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Control type="text" name='username' placeholder="Nombre" className={style.ModalInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                  <Form.Control type="text" name='lastname' placeholder="Apellido" className={style.ModalInput} />
                </Form.Group>
              </section>
              <section className={style.ModalInput}>
                <p>Fecha de nacimiento</p>
                <Form.Group className="mb-3" controlId="date">
                  <Form.Control type="date" name='password' placeholder="Contraseña" className={style.ModalInput} />
                </Form.Group>
              </section>
              <section className={style.ModalInput}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Pais" id={style.CountryInput} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Ciudad" id={style.CityInput} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="+57 | número de celular" />
                </Form.Group>
              </section>
              <section className={style.ModalInput}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="nombre de usuario" />
                </Form.Group>
                <p>@Nombredeusuario</p>
              </section>
              <section className={style.ModalInput}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Modificar Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Confirmar Contraseña" />
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
        <Link to={'/Home'}>
          <img src={Home} alt="" className={style.SideBarItem} />
        </Link>
        <Link>
          <img src={Notification} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Chats'}>
          <img src={Chat} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Billing'}>
          <img src={Billing} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Subscriptions'}>
          <img src={Subscription} alt="" className={style.SideBarItem} />
        </Link>
      </div>
      <div id={style.SideBarMore}>
        <img src={More} alt="" className={style.SideBarItem} />
      </div>
    </main >
  );
}

export default SideBar;
