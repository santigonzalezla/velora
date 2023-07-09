import SideBar from './SideBar';
import style from './HomeApp.module.css'
import { Col, Row, Image, Container, Form } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import User from '../../assets/img/HomeApp/Chats/User.png'
import Send from '../../assets/img/HomeApp/Chats/Send.png'
import More from '../../assets/img/HomeApp/Chats/More.png'
import Video from '../../assets/img/HomeApp/Chats/Video.png'

const Chats = () => {
  return (
    <div id={style.Chats}>
      <SideBar />
      <Container fluid className={style.ChatsContainer} >
        <Row>
          <Col className={style.ChatsBar} xs='2' sm='3' md='3'>
            <Image src={Logo} id={style.LogoChats} fluid />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id={style.SerchUser}
            />
            <section className={style.UserChatData} >
              <Image src={User} fluid className={style.UserPhoto} />
              <div className={style.UserChatDataTxT}>
                <span>Beautiful Mouse</span>
                <span>@beautifulmouse112</span>
              </div>
            </section>
            <section className={style.UserChatData} >
              <Image src={User} fluid className={style.UserPhoto} />
              <div className={style.UserChatDataTxT}>
                <span>Beautiful Mouse</span>
                <span>@beautifulmouse112</span>
              </div>
            </section>
            <section className={style.UserChatData} >
              <Image src={User} fluid className={style.UserPhoto} />
              <div className={style.UserChatDataTxT}>
                <span>Beautiful Mouse</span>
                <span>@beautifulmouse112</span>
              </div>
            </section>
            <section className={style.UserChatData} >
              <Image src={User} fluid className={style.UserPhoto} />
              <div className={style.UserChatDataTxT}>
                <span>Beautiful Mouse</span>
                <span>@beautifulmouse112</span>
              </div>
            </section>
            <section className={style.UserChatData} >
              <Image src={User} fluid className={style.UserPhoto} />
              <div className={style.UserChatDataTxT}>
                <span>Beautiful Mouse</span>
                <span>@beautifulmouse112</span>
              </div>
            </section>
          </Col>
          <Col xs='10' sm='9' md='9' className={style.UserChat}>
            <section className={style.OtherUser}>
              <div className={style.chatBubble1}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
              </div>
            </section>
            <section className={style.MyUser}>
              <div className={style.chatBubble2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
              </div>
            </section>
            <section className={style.OtherUser}>
              <div className={style.chatBubble1}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>
              </div>
            </section>
            <section className={style.MyUser}>
              <div className={style.chatBubble2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>
              </div>
            </section>
            <Form className={style.SendMsg}>
              <Image src={Video} className={style.SendIcons} />
              <Image src={More} className={style.SendIcons} />
              <Form.Control
                type="text"
                className="me-2"
                id={style.Send}
              />
              <Image src={Send} className={style.SendIcons} />
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Chats;
