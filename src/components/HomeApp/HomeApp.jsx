import style from './HomeApp.module.css'
import SideBar from './SideBar';
import Feed from './Feed'

const HomeApp = () => {
  return (
    <div id={style.HomeApp}>
      <SideBar />
      <div id={style.ContentHomeApp}>
        <Feed />
      </div>
    </div>
  );
}

export default HomeApp;
