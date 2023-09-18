import style from './HomeApp.module.css'
import SideBar from '../SideBar/SideBar';
import { Table } from 'react-bootstrap';
import Artist from '../../assets/img/HomeApp/Subscriptions/ArtistPhoto.png'

const Subscriptions = () => {
  return (
    <div id={style.Subscriptions}>
      <SideBar />
      <section id={style.SubscriptionsContainer}>
        <Table striped bordered hover>
          <tbody>
            <tr id={style.SubItemHead} >
              <th>Artista</th>
              <th>Subscrito desde</th>
              <th>Costo </th>
              <th>Pago Automático</th>
              <th>Estado subscripción</th>
            </tr>
            <tr className={style.SubItem}>
              <td><span><img src={Artist} alt="" className={style.ArtisSub} /> NOMBRE</span></td>
              <td>DD/MM/AA</td>
              <td>250USD/MES</td>
              <td>
                <label className={style.toggleSwitch}>
                  <input type="checkbox" />
                  <div className={style.toggleSwitchBackground}>
                    <div className={style.toggleSwitchHandle}></div>
                  </div>
                </label>
              </td >
              <td>Activa</td>
            </tr>
            <tr className={style.SubItem}>
              <td><span><img src={Artist} alt="" className={style.ArtisSub} /> NOMBRE</span></td>
              <td>DD/MM/AA</td>
              <td>250USD/MES</td>
              <td>
                <label className={style.toggleSwitch}>
                  <input type="checkbox" />
                  <div className={style.toggleSwitchBackground}>
                    <div className={style.toggleSwitchHandle}></div>
                  </div>
                </label>
              </td >
              <td>Activa</td>
            </tr>
            <tr className={style.SubItem}>
              <td><span><img src={Artist} alt="" className={style.ArtisSub} /> NOMBRE</span></td>
              <td>DD/MM/AA</td>
              <td>250USD/MES</td>
              <td>
                <label className={style.toggleSwitch}>
                  <input type="checkbox" />
                  <div className={style.toggleSwitchBackground}>
                    <div className={style.toggleSwitchHandle}></div>
                  </div>
                </label>
              </ td >
              <td>Activa</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div >
  );
}

export default Subscriptions;
