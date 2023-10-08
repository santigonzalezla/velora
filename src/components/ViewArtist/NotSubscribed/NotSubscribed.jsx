import { useState } from "react";
import { Container, Col, Row, Tabs, Tab, Modal } from "react-bootstrap";
import style from '../HomeApp.module.css'
import Feed from "../../Feed/Feed";
import Premium from '../../../assets/img/HomeApp/ViewArtist/Premium.png'
import NoPremium from '../../../assets/img/HomeApp/ViewArtist/NoPremium.png'

const NotSubscribed = () => {
  const [reqSubs, setReqSubs] = useState(false);
  const reqSubsClose = () => setReqSubs(false);
  const reqSubsShow = () => setReqSubs(true);
  const [buyPack, setBuyPack] = useState(false);
  const buyPackClose = () => setBuyPack(false);
  const buyPackShow = () => {
    setReqSubs(false)
    setBuyPack(true);
  }
  return (
    <div id={style.NotSubscribed}>
      <Tabs id={style.Navies} defaultActiveKey="profile" className="mb-3">
        <Tab eventKey="Feed" title="Feed">
          <Feed />
        </Tab >
        <Tab eventKey="PREMIUM" title="PREMIUM" className={style.Premium}>
          <Row className={style.Premium} onClick={reqSubsShow}>
            <Col sm='3' className={style.Premium}>
              <img src={NoPremium} alt="" width={150} />
            </Col>
            <Col sm='3' className={style.Premium}>
              <img src={Premium} alt="" width={150} />
            </Col>
            <Col sm='3' className={style.Premium}>
              <img src={Premium} alt="" width={150} />
            </Col>
            <Col sm='3' className={style.Premium}>
              <img src={Premium} alt="" width={150} />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="ROOM ME" title="ROOM ME" id={style.RoomBtn}>
          <Modal show={reqSubs} onHide={reqSubsClose} id={style.buySubsModal}>
            <Modal.Body id={style.buySubsModalBody}>
              <p>Para acceder a  Estos servicios debes de pagar la subcripción </p>
              <div id={style.subBtnData} onClick={buyPackShow}>COMPRAR SUSCRIPCIÓN</div>
            </Modal.Body>
          </Modal>

          <Modal show={buyPack} onHide={buyPackClose} id={style.buySubsModal}>
            <Modal.Header className={style.buySubsModalHeader}>
              <p>Costo paquete</p>
            </Modal.Header>
            <Modal.Body className={style.buySubsModalBody}>
              <center>
                <h3>8 USD</h3>
                <div id={style.subBtnData} onClick={buyPackShow}>COMPRAR SUSCRIPCIÓN</div>
              </center>
            </Modal.Body>
            <Modal.Footer className={style.buySubsModalFooter}>
              <span>12 créditos disponibles</span>
              <p>comprar créditos</p>
            </Modal.Footer>
          </Modal>
          <section>
            <Container>
              <Row className={style.RoomME}>
                <div>
                  <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_3724)"><path d="M64.8438 31.1252H62.25V21.2262C62.25 9.32348 53.6375 0.000244141 41.404 0.000244141C29.1213 0.000244141 20.75 9.5219 20.75 21.2262V31.1252H18.1562C12.4344 31.1252 7.78125 35.7784 7.78125 41.5002V72.6252C7.78125 78.3471 12.4344 83.0002 18.1562 83.0002H64.8438C70.5656 83.0002 75.2188 78.3471 75.2188 72.6252V41.5002C75.2188 35.7784 70.5656 31.1252 64.8438 31.1252ZM25.9375 21.2262C25.9375 12.3841 31.9809 5.18774 41.404 5.18774C50.7299 5.18774 57.0625 12.2324 57.0625 21.2262V31.1252H25.9375V21.2262ZM70.0313 72.6252C70.0313 75.4849 67.7034 77.8127 64.8438 77.8127H18.1563C15.2967 77.8127 12.9688 75.4849 12.9688 72.6252V41.5002C12.9688 38.6406 15.2967 36.3127 18.1563 36.3127H64.8438C67.7034 36.3127 70.0313 38.6406 70.0313 41.5002V72.6252ZM41.5001 46.6877C38.6353 46.6877 36.3126 49.0104 36.3126 51.8752C36.3126 53.7907 37.3631 55.4442 38.9063 56.343V64.844C38.9063 66.2757 40.0683 67.4377 41.5001 67.4377C42.9318 67.4377 44.0938 66.2757 44.0938 64.844V56.343C45.6371 55.4442 46.6876 53.7894 46.6876 51.8752C46.6876 49.0104 44.3649 46.6877 41.5001 46.6877Z" fill="#373B56" /></g><defs><clipPath id="clip0_1_3724"><rect width="83" height="83" fill="white" /></clipPath></defs></svg>
                </div>
                <p>Debes subscribirte para acceder al contenido</p>
              </Row>
            </Container>
          </section>
        </Tab>
      </Tabs>
    </div>
  );
}

export default NotSubscribed;
