import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import imgCard from '../../assets/img/HomeApp/Suggestions/imgCard.png'
import userPhoto from '../../assets/img/HomeApp/Suggestions/userPhoto.png'
import Logo from '../../assets/img/HomeApp/Suggestions/logoside.png'

import { Cookies } from 'react-cookie'
import jwt from 'jwt-decode'

const cookies = new Cookies();

async function getSuggetions(username) {
  const token = cookies.get('auth-cookie');
  const headers = {
    'Authorization': 'Bearer ' + (token || '')
  };
  const url = `${import.meta.env.VITE_AUTH_API_URL}/profile/${username}`;
  const response = await fetch(url, { headers });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

const Suggetions = () => {
  const [suggetions, setSuggetions] = useState(null);
  const [userNames, setUserNames] = useState(['macondo', 'shadowstalker', 'usertest9']);

  const generateSuggetions = async () => {
    let tempSuggetions = [];
    for (let i = 0; i < userNames.length; i++) {
      const sug = await getSuggetions(userNames[i]);
      tempSuggetions.push(sug.data);
    }

    return tempSuggetions;
  }

  const suggestionHandle = (e) => {
    console.log(e.target);
  }

  useEffect(() => {
    generateSuggetions().then((suggetions) => {
      setSuggetions(suggetions);
    });
  }, []);

  return (
    <div id={style.Suggetions}>
      <article id={style.SuggetionsContainer}>
        <h2>Sugerencias</h2>
        {suggetions &&
          suggetions.map((suggetion, index) => (
            <div key={index} onClick={suggestionHandle}>
              <section className={style.SuggetionsCard}>
                <div>
                  <Image src={imgCard} fluid />
                </div>
                <div className={style.SuggetionsContent}>
                  <Image src={userPhoto} className={style.userPhoto} />
                  <div className={style.SuggetionsText}>
                    <h5>
                      @{suggetion.username}
                    </h5>
                    <span >
                      Gravida diam enim sed ut mi. Est in sit sed tincidunta.
                    </span>
                  </div>
                </div>
              </section>
            </div>
          ))
        }
        <section>
          <div>
            <span> 1 </span>
            <span> 2 </span>
            <span> 3 </span>
          </div>
          <div>
            <span>Terms of service</span>
            <span>Cookies</span>
            <span>PrivacyPolice</span>
          </div>
        </section>
      </article>
      <section>
        <img src={Logo} alt="" width={350} />
      </section>
    </div>
  );
}

export default Suggetions;
