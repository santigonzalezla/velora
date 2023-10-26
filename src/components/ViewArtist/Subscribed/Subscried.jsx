import { Container, Col, Row, Image, Modal } from "react-bootstrap";
import { useState } from "react";
import style from '../HomeApp.module.css'
import Feed from "../../Feed/Feed";
import Date from '../../../assets/img/HomeApp/ViewArtist/Date.png'
import WebCam from '../../../assets/img/HomeApp/ViewArtist/WebCam.png'
import Premium from '../../../assets/img/HomeApp/ViewArtist/Premium.png'
import PremiumCover from '../../../assets/img/HomeApp/ViewArtist/PremiumCover.png'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
      <TabList>
        <Tab>FEED</Tab>
        <Tab>PREMIUM</Tab>
        <Tab id={style.RoomBtn}>ROOM ME</Tab>
      </TabList>
      <TabPanel>
        <Feed artistView={true} artist={artist} />
      </TabPanel >
      <TabPanel>
        <Row className={style.Premium} >
          <Col sm='3' className={style.Premium}>
            <img src={Premium} alt="" onClick={packShow} />
          </Col>
          <Col sm='3' className={style.Premium}>
            <img src={Premium} alt="" />
          </Col>
          <Col sm='3' className={style.Premium}>
            <img src={Premium} alt="" />
          </Col>
          <Col sm='3' className={style.Premium}>
            <img src={Premium} alt="" />
          </Col>
        </Row>
        <Modal show={pack} onHide={packClose} id={style.packModal} size="lg">
          <Modal.Body id={style.packPremium}>
            <img src={PremiumCover} alt="" width={50} />
            <section id={style.PremiumHeader}>
              <span>Yoga</span>
              <div>
                <span>3</span>
                <svg width="18" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z" stroke="#373B56" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.49246 14.7748C8.77201 15.1276 9.13216 15.4082 9.54265 15.5929C9.95314 15.7776 10.402 15.8611 10.8514 15.8364H12.2668C12.8925 15.8364 13.4925 15.5878 13.9349 15.1454C14.3773 14.703 14.6258 14.103 14.6258 13.4774C14.6258 12.8517 14.3773 12.2517 13.9349 11.8093C13.4925 11.3669 12.8925 11.1184 12.2668 11.1184H10.7335C10.1078 11.1184 9.50783 10.8699 9.06544 10.4275C8.62304 9.98509 8.37451 9.38508 8.37451 8.75944C8.37451 8.1338 8.62304 7.53378 9.06544 7.09139C9.50783 6.649 10.1078 6.40046 10.7335 6.40046H12.1489C13.2104 6.40046 13.9181 6.63636 14.5078 7.462M11.4412 5.10303V16.8979" stroke="#373B56" stroke-width="1.04" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span onClick={packClose}>x</span>
            </section>
            <Row className={style.Premium}>
              <Col sm='3' className={style.Premium} >
                <img src={PrimiumPackage} alt="" />
              </Col>
              <Col sm='3' className={style.Premium}>
                <img src={PrimiumPackage} alt="" />
              </Col>
              <Col sm='3' className={style.Premium}>
                <img src={PrimiumPackage} alt="" />
              </Col>
              <Col sm='3' className={style.Premium}>
                <img src={PrimiumPackage} alt="" />
              </Col>
            </Row>
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
      </TabPanel>
      <TabPanel id={style.RoomBtn}>
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
                    <input type="date" name="" id="" placeholder="Junio 20 2023" />
                    <p>a las</p>
                    <input type="text" name="" id="" placeholder="11:00" />
                  </div>
                  <div className={style.Add}>
                    <p onClick={dateClose}>Cancelar</p>
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
                    <input type="date" name="" id="" placeholder="Junio 20 2023" />
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
                    <p onClick={dinnerClose}>Cancelar</p>
                    <span>Agendar</span>
                  </div>
                </Modal.Body>
              </Modal>
            </Row>
          </Container>
        </section>
      </TabPanel>
    </Tabs >
  );
}


export default Subscribed;
