import style from './HomeApp.module.css'
import { Col, Row, Container } from 'react-bootstrap';
import SideBar from './SideBar';
import Feed from './Feed'
import Suggetions from './Suggetions';

const HomeApp = () => {
  return (
    <div id={style.HomeApp}>
      <SideBar />
      <Container id={style.ContentHomeApp} fluid>
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
