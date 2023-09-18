import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap';
import imgCard from '../../assets/img/HomeApp/Suggestions/imgCard.png'
import userPhoto from '../../assets/img/HomeApp/Suggestions/userPhoto.png'
import Logo from '../../assets/img/HomeApp/Suggestions/logoside.png'

const Suggetions = () => {
  return (
    <div id={style.Suggetions}>
      <article id={style.SuggetionsContainer}>
        <h2>Sugerencias</h2>
        <section className={style.SuggetionsCard}>
          <div>
            <Image src={imgCard} fluid />
          </div>
          <div className={style.SuggetionsContent}>
            <Image src={userPhoto} className={style.userPhoto} />
            <div className={style.SuggetionsText}>
              <h5>
                @beautifulmouse112
              </h5>
              <span >
                Gravida diam enim sed ut mi. Est in sit sed tincidunt.
              </span>
            </div>
          </div>
        </section>
        <section className={style.SuggetionsCard}>
          <div>
            <Image src={imgCard} fluid />
          </div>
          <div className={style.SuggetionsContent}>
            <Image src={userPhoto} className={style.userPhoto} />
            <div className={style.SuggetionsText}>
              <h5>
                @beautifulmouse112
              </h5>
              <span >
                Gravida diam enim sed ut mi. Est in sit sed tincidunt.
              </span>
            </div>
          </div>
        </section>
        <section className={style.SuggetionsCard}>
          <div>
            <Image src={imgCard} fluid />
          </div>
          <div className={style.SuggetionsContent}>
            <Image src={userPhoto} className={style.userPhoto} />
            <div className={style.SuggetionsText}>
              <h5>
                @beautifulmouse112
              </h5>
              <span >
                Gravida diam enim sed ut mi. Est in sit sed tincidunt.
              </span>
            </div>
          </div>
        </section>
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
