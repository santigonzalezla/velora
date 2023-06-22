import style from './HomeApp.module.css'
import Porfile from '../../assets/img/HomeApp/Eclipse.png'

const SideBar = () => {
  return (
    <div id={style.SideBar}>
      <img src={Porfile} alt="" className={style.SideBarItem} />
    </div>
  );
}

export default SideBar;
