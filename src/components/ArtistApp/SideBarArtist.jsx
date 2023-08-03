import style from './ArtistApp.module.css'
import { Link } from 'react-router-dom';
import Porfile from '../../assets/img/ArtistApp/SideBarArt/Eclipse.png'
import Home from '../../assets/img/ArtistApp/SideBarArt/home.png'
import Notification from '../../assets/img/ArtistApp/SideBarArt/notification.png'
import Chat from '../../assets/img/ArtistApp/SideBarArt/chat.png'
import Billing from '../../assets/img/ArtistApp/SideBarArt/Billing.png'
import Dashboard from '../../assets/img/ArtistApp/SideBarArt/Dashboard.png'
import More from '../../assets/img/ArtistApp/SideBarArt/more.png'

const SideBarArtist = () => {
  return (
    <main id={style.SideBar}>
      <div id={style.SideBarIcons}>
        <Link to={'/ArtistPorfile'}>
          <img src={Porfile} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/ArtistApp'}>
          <img src={Home} alt="" className={style.SideBarItem} />
        </Link>
        <Link>
          <img src={Notification} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Chats'}>
          <img src={Chat} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Billing'}>
          <img src={Billing} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Subscriptions'}>
          <img src={Dashboard} alt="" className={style.SideBarItem} />
        </Link>
      </div>
      <div id={style.SideBarMore}>
        <img src={More} alt="" className={style.SideBarItem} />
      </div>
    </main>
  );
}

export default SideBarArtist;
