import style from './HomeApp.module.css'
import { Col, Row, Container } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Stories from '../Stories/Stories';
import Feed from '../Feed/Feed'
import Suggetions from '../Suggetions/Suggetions';

const HomeApp = () => {
  return (
    <div id={style.HomeApp}>
      <SideBar />
      <Container id={style.ContentHomeApp} fluid>
        <Stories />
        <Row>
          <Col xs="12" sm="8" md="8" lg="8">
            <Feed />
          </Col>
          <Col xs="12" sm="4" md="4" lg="4">
            <Suggetions />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeApp;
