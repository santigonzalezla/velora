import style from './HomeApp.module.css'
import SideBar from '../SideBar/SideBar';
import { Table } from 'react-bootstrap';
import Artist from '../../assets/img/HomeApp/Subscriptions/ArtistPhoto.png'
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

const cookies = new Cookies();
const token = cookies.get('auth-cookie');
const decode = token ? jwt(token) : null;


async function getSubArtists(username) {
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_INTERACTIONS_URL}/follow/service/followedArtist/${username}`, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}

async function getSubscriptionInfo(artist) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const response = await fetch(`${import.meta.env.VITE_INTERACTIONS_URL}/follow/serviceInfo/${artist}`, {
    headers
  });

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return null;
  }
}


const Subscriptions = () => {
  const [suscriptions, setSubscriptions] = useState([]);


  useEffect(() => {
    async function getSubs() {
      let subInfo = [];
      const subs = await getSubArtists(decode.username);
      for (let i = 0; i < subs.length; i++) {
        const sub = subs[i];
        const info = await getSubscriptionInfo(sub);
        subInfo = [...subInfo, info.serviceInfo[0]];
      }
      setSubscriptions(subInfo);
      console.log(subInfo);
    }
    getSubs();
  }, []);

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
            {
              suscriptions.map((sub) => {
                const time = new Date(sub.create_time);
                return (
                  <tr className={style.SubItem}>
                  <td><span><img src={Artist} alt="" className={style.ArtisSub} /> {sub.artist_id}</span></td>
                  <td>{time.toLocaleDateString()}</td>
                  <td>{sub.price} Creditos/MES</td>
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
                )
              })
            }
          </tbody>
        </Table>
      </section>
    </div >
  );
}

export default Subscriptions;
