import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import style from './Login.module.css'
import Twitter from '../../assets/img/Login/Twitter.webp'
import Facebook from '../../assets/img/Login/Facebook.png'
import Google from '../../assets/img/Login/Google.png'

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={style.ModalContainer}>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}

      >
        <Modal.Body className={style.ModalBody}>
          <Modal.Title id={style.ModalTitle} >Login</Modal.Title>
          <Form>
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
    </div>
  );
}

export default Login;
