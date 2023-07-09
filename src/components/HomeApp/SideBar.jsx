import style from './HomeApp.module.css'
import { Link } from 'react-router-dom';
import Porfile from '../../assets/img/HomeApp/SideBar/Eclipse.png'
import Home from '../../assets/img/HomeApp/SideBar/home.png'
import Notification from '../../assets/img/HomeApp/SideBar/notification.png'
import Chat from '../../assets/img/HomeApp/SideBar/chat.png'
import Billing from '../../assets/img/HomeApp/SideBar/Billing.png'
import Subscription from '../../assets/img/HomeApp/SideBar/Subscriptions.png'
import More from '../../assets/img/HomeApp/SideBar/more.png'

const SideBar = () => {
  return (
    <main id={style.SideBar}>
      <div id={style.SideBarIcons}>
        <Link to={'/ViewArtist'}>
          <img src={Porfile} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/Home'}>
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
          <img src={Subscription} alt="" className={style.SideBarItem} />
        </Link>
      </div>
      <div id={style.SideBarMore}>
        <img src={More} alt="" className={style.SideBarItem} />
      </div>
    </main>
  );
}

export default SideBar;
