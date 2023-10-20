import style from './ArtistApp.module.css'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import { Col, Row, Image, Container, Form } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import User from '../../assets/img/HomeApp/Chats/User.png'
import ArtistChatStory from './ArtistChatStory';

const ArtistUserStory = () => {
  return (
    <div>
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
    </div>
  );
}

export default ArtistUserStory;
