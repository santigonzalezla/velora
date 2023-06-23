import style from './HomeApp.module.css'
import { Link } from 'react-router-dom';
import Porfile from '../../assets/img/HomeApp/SideBar/Eclipse.png'
import Home from '../../assets/img/HomeApp/SideBar/home.png'
import Notification from '../../assets/img/HomeApp/SideBar/notification.png'
import Chat from '../../assets/img/HomeApp/SideBar/chat.png'
import Subscription from '../../assets/img/HomeApp/SideBar/Subscriptions.png'

const SideBar = () => {
  return (
    <main id={style.SideBar}>
      <div id={style.SideBarIcons}>
        <Link>
          <img src={Porfile} alt="" className={style.SideBarItem} />
        </Link>
        <Link>
          <img src={Home} alt="" className={style.SideBarItem} />
        </Link>
        <Link>
          <img src={Notification} alt="" className={style.SideBarItem} />
        </Link>
        <Link>
          <img src={Chat} alt="" className={style.SideBarItem} />
        </Link>
        <Link>
          <img src={Subscription} alt="" className={style.SideBarItem} />
        </Link>
      </div>
    </main>
  );
}

export default SideBar;
