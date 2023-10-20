import style from './ArtistApp.module.css'
import { Image, Form } from 'react-bootstrap';
import Send from '../../assets/img/HomeApp/Chats/Send.png'
import More from '../../assets/img/HomeApp/Chats/More.png'
import Video from '../../assets/img/HomeApp/Chats/Video.png'

const ArtistChatStory = () => {
  return (
    <div id={style.ArtistChatStory}>
      <article>
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
      </article>
      <form className={style.SendMsg}>
        <Image src={Video} className={style.SendIcons} />
        <Image src={More} className={style.SendIcons} />
        <input
          type="text"
          id={style.Send}
        />
        <Image src={Send} className={style.SendIcons} />
      </form>
    </div>
  );
}

export default ArtistChatStory;
