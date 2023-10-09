import { Container, Col, Row, Tabs, Tab, Image, Modal } from "react-bootstrap";
import { useState } from "react";
import style from '../HomeApp.module.css'
import Feed from "../../Feed/Feed";
import Date from '../../../assets/img/HomeApp/ViewArtist/Date.png'
import WebCam from '../../../assets/img/HomeApp/ViewArtist/WebCam.png'
import Premium from '../../../assets/img/HomeApp/ViewArtist/Premium.png'
import PrimiumPackage from '../../../assets/img/HomeApp/ViewArtist/PrimiumPackage.png'

const Subscribed = (props) => {
  const { artist } = props;
  const [pack, setPack] = useState(false);
  const packShow = () => setPack(true);
  const packClose = () => setPack(false)

  const [date, setDate] = useState(false);
  const dateShow = () => setDate(true);
  const dateClose = () => setDate(false);

  const [dinner, setDinner] = useState(false);
  const dinnerShow = () => setDinner(true);
  const dinnerClose = () => setDinner(false);

  return (
    <Tabs id={style.Navies} defaultActiveKey="profile" className="mb-3">
      <Tab eventKey="Feed" title="Feed">
        <Feed artistView={true} artist={artist}/>
      </Tab >
      <Tab eventKey="PREMIUM" title="PREMIUM">
        <Row className={style.Premium} >
          <Col sm='3' className={style.Premium}>
            <img src={Premium} alt="" width={150} onClick={packShow} />
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
        <Modal show={pack} onHide={packClose} id={style.packModal}>
          <Modal.Body id={style.packPremium}>
            <h1>Yoga</h1>
            <Row className={style.Premium}>
              <Col sm='3' className={style.Premium} >
                <img src={PrimiumPackage} alt="" width={100} />
              </Col>
              <Col sm='3' className={style.Premium}>
                <img src={PrimiumPackage} alt="" width={100} />
              </Col>
              <Col sm='3' className={style.Premium}>
                <img src={PrimiumPackage} alt="" width={100} />
              </Col>
              <Col sm='3' className={style.Premium}>
                <img src={PrimiumPackage} alt="" width={100} />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Tab>
      <Tab eventKey="ROOM ME" title="ROOM ME" id={style.RoomBtn}>
        <section>
          <Container>
            <Row>
              <Col >
                <div className={style.RoomMeServices} onClick={dateShow}>
                  <Image src={WebCam} width={200} />
                </div>
              </Col>
              <Modal show={date} onHide={dateClose}>
                <Modal.Body id={style.AddDateModal}>
                  <p>Programar Encuentro</p>
                  <div id={style.AddDate}>
                    <input type="text" name="" id="" placeholder="Junio 20 2023" />
                    <p>a las</p>
                    <input type="text" name="" id="" placeholder="11:00" />
                  </div>
                  <div className={style.Add}>
                    <p>Cancelar</p>
                    <span>Agendar</span>
                  </div>
                </Modal.Body>
              </Modal>
              <Col>
                <div className={style.RoomMeServices} onClick={dinnerShow}>
                  <Image src={Date} width={200} />
                </div>
              </Col>
              <Modal show={dinner} onHide={dinnerClose}>
                <Modal.Body id={style.AddWhereModal}>
                  <p>Programar Encuentro</p>
                  <div id={style.AddDate}>
                    <input type="text" name="" id="" placeholder="Junio 20 2023" />
                    <p>a las</p>
                    <input type="text" name="" id="" placeholder="11:00" />
                  </div>
                  <div >
                    <p>¿Que te gustaria hacer?</p>
                    <div className={style.where}>
                      <span>lorem ipsum</span>
                      <span>lorem ipsum</span>
                      <span>lorem ipsum</span>
                    </div>
                  </div>
                  <div >
                    <p>¿Donde?</p>
                    <div className={style.where}>
                      <span>lorem ipsum</span>
                      <span>lorem ipsum</span>
                      <span>lorem ipsum</span>
                    </div>
                  </div>
                  <div className={style.Add}>
                    <p>Cancelar</p>
                    <span>Agendar</span>
                  </div>
                </Modal.Body>
              </Modal>
            </Row>
          </Container>
        </section>
      </Tab>
    </Tabs>
  );
}


export default Subscribed;
