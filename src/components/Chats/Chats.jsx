import SideBar from '../SideBar/SideBar';
import style from './HomeApp.module.css'
import { Col, Row, Container } from 'react-bootstrap';
import UserStory from './UserStory';
import ChatStory from './ChatStory';

const Chats = () => {

  return (
    <div id={style.Chats}>
      <SideBar />
      <Container fluid className={style.ChatsContainer} >
        <Row>
          <Col className={style.ChatsBar} xs='2' sm='3' md='3'>
            <UserStory />
          </Col>
          <Col xs='10' sm='9' md='9' className={style.UserChat}>
            <ChatStory />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Chats;
