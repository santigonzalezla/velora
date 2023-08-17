import style from './HomeApp.module.css'
import { Link } from 'react-router-dom';
import { Button, Modal, Nav, Form, Overlay } from 'react-bootstrap';
import { useState, useRef } from 'react';
import Porfile from '../../assets/img/HomeApp/SideBar/Eclipse.png'
import User from '../../assets/img/HomeApp/SideBar/User.png'
import Home from '../../assets/img/HomeApp/SideBar/home.png'
import Notification from '../../assets/img/HomeApp/SideBar/notification.png'
import Chat from '../../assets/img/HomeApp/SideBar/chat.png'
import Billing from '../../assets/img/HomeApp/SideBar/Billing.png'
import Subscription from '../../assets/img/HomeApp/SideBar/Subscriptions.png'
import More from '../../assets/img/HomeApp/SideBar/more.png'
import Settings from '../../assets/img/HomeApp/SideBar/settings.png'
import Transactions from '../../assets/img/HomeApp/SideBar/transactions.png'
import Suports from '../../assets/img/HomeApp/SideBar/suports.png'
import Logout from '../../assets/img/HomeApp/SideBar/logout.png'

const SideBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notification, setNotification] = useState(false);
  const targetNotification = useRef(null);

  // Controlls for more overlay
  const [overlay, setOverlay] = useState(false);
  const target = useRef(null);

  return (
    <main id={style.SideBar}>
      <div id={style.SideBarIcons}>
        <Nav.Link onClick={handleShow}>
          <img src={Porfile} alt="" className={style.SideBarItem} />
        </Nav.Link>
        {/* Start Modal Porfile */}
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
        {/* End Modal porfile */}
        <Link to={'/Home'}>
          <img src={Home} alt="" className={style.SideBarItem} />
        </Link>
        <Link ref={targetNotification} onClick={() => setNotification(!notification)}>
          <img src={Notification} alt="" className={style.SideBarItem} />
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
          }) => (
            <div
              id={style.Notification}
              {...props}
              style={{
                position: 'absolute',
                backgroundColor: '#F9F9F9',
                padding: '2px 10px',
                color: '#373B56',
                ...props.style,
              }}
            >
              <div className={style.notificationHead}>
                <h4>Notification</h4>
                <img src={Settings} alt="" />
              </div>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
            </div>
          )}
        </Overlay>
        {/* End notification overlay */}
        <Link to={'/Chats'}>
          <img src={Chat} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Billing'}>
          <img src={Billing} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Subscriptions'}>
          <img src={Subscription} alt="" className={style.SideBarItem} />
        </Link>
      </div >
      <div id={style.SideBarMore} ref={target} onClick={() => setOverlay(!overlay)}>
        <img src={More} alt="" className={style.SideBarItem} />
      </div >
      {/* start More overlay */}
      <Overlay target={target.current} show={overlay} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            id={style.Overlay}
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: '#F9F9F9',
              padding: '2px 10px',
              color: '#373B56',
              borderRadius: 5,
              ...props.style,
            }}
          >
            <div className={style.overlayItem}>
              <img src={Settings} alt="" className={style.iconsOverlay} />
              <p>Configuración</p>
            </div>
            <div className={style.overlayItem}>
              <img src={Transactions} alt="" className={style.iconsOverlay} />
              <p>Transacciones</p>
            </div>
            <div className={style.overlayItem}>
              <img src={Suports} alt="" className={style.iconsOverlay} />
              <p>Soporte</p>
            </div>
            <div className={style.overlayItem}>
              <img src={Logout} alt="" className={style.iconsOverlay} />
              <p>Cerrar Sesión</p>
            </div>
          </div>
        )}
      </Overlay>
      {/* End More overlay */}
    </main >
  );
}

export default SideBar;
