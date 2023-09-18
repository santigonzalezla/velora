import style from './ArtistApp.module.css'
import { Link } from 'react-router-dom';
import { Overlay } from 'react-bootstrap';
import { useState, useRef } from 'react';
import Porfile from '../../assets/img/ArtistApp/SideBarArt/Eclipse.png'
import Home from '../../assets/img/ArtistApp/SideBarArt/home.png'
import Notification from '../../assets/img/ArtistApp/SideBarArt/notification.png'
import Chat from '../../assets/img/ArtistApp/SideBarArt/chat.png'
import Billing from '../../assets/img/ArtistApp/SideBarArt/Billing.png'
import Dashboard from '../../assets/img/ArtistApp/SideBarArt/Dashboard.png'
import More from '../../assets/img/ArtistApp/SideBarArt/more.png'

const SideBarArtist = () => {
  
  const [notification, setNotification] = useState(false);
  const targetNotification = useRef(null);
  const [overlay, setOverlay] = useState(false);
  const target = useRef(null);
  
  return (
    <main id={style.SideBar}>
      <div id={style.SideBarIcons}>
        <Link to={'/ArtistPorfile'}>
          <img src={Porfile} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/ArtistApp'}>
          <img src={Home} alt="" className={style.SideBarItem} />
        </Link>
        <Link ref={targetNotification} onClick={() => setNotification(!notification)}>
          <img src={Notification} alt="" className={style.SideBarItem} />
        </Link>
        {/* start notification overlay */}
        <Overlay target={targetNotification.current} show={notification} placement="right">
          {({
            placement: _placement,
            arrowProps: _arrowProps,
            show: _show,
            popper: _popper,
            hasDoneInitialMeasure: _hasDoneInitialMeasure,
            ...props
          }) => (
            <div
              id={style.Notification}
              {...props}
              style={{
                position: 'absolute',
                backgroundColor: '#F9F9F9',
                padding: '2px 10px',
                color: '#373B56',
                ...props.style,
              }}
            >
              <div className={style.notificationHead}>
                <h4>Notification</h4>
                <img src={Settings} alt="" />
              </div>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
              <section >
                <div className={style.notificationItem}>
                  <img src={User} alt="" />
                  <p>@beautifulmouse112</p>
                  <p>ahora</p>
                </div>
                <span>magnis dis parturient. Purus faucibus ornare ... </span>
              </section>
            </div>
          )}
        </Overlay>
        {/* End notification overlay */}
        <Link to={'/ArtstChats'}>
          <img src={Chat} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/BillingArtist'}>
          <img src={Billing} alt="" className={style.SideBarItem} />
        </Link>
        <Link to={'/ArtistDashboard'}>
          <img src={Dashboard} alt="" className={style.SideBarItem} />
        </Link>
      </div>
      <div id={style.SideBarMore} ref={target} onClick={() => setOverlay(!overlay)}>
        <img src={More} alt="" className={style.SideBarItem} />
      </div >
      <Overlay target={target.current} show={overlay} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            id={style.Overlay}
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: '#F9F9F9',
              padding: '2px 10px',
              color: '#373B56',
              borderRadius: 5,
              ...props.style,
            }}
          >
            <div className={style.overlayItem}>
              <img src={Settings} alt="" className={style.iconsOverlay} />
              <p>Configuración</p>
            </div>
            <div className={style.overlayItem}>
              <img src={Transactions} alt="" className={style.iconsOverlay} />
              <p>Transacciones</p>
            </div>
            <div className={style.overlayItem}>
              <img src={Suports} alt="" className={style.iconsOverlay} />
              <p>Soporte</p>
            </div>
            <div className={style.overlayItem}>
              <img src={Logout} alt="" className={style.iconsOverlay} />
              <p>Cerrar Sesión</p>
            </div>
          </div>
        )}
      </Overlay>
    </main>
  );
}

export default SideBarArtist;
