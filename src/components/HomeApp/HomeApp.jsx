import style from './HomeApp.module.css'
import SideBar from './SideBar';

const HomeApp = () => {
  return (
    <div id={style.HomeApp}>
      <SideBar />
    </div>
  );
}

export default HomeApp;
