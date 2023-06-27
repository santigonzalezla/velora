import style from './HomeApp.module.css'
import { Image, Pagination } from 'react-bootstrap';
import imgCard from '../../assets/img/HomeApp/Suggestions/imgCard.png'
import userPhoto from '../../assets/img/HomeApp/Suggestions/userPhoto.png'

const Suggetions = () => {
  return (
    <div id={style.Suggetions}>
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

      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
}

export default Suggetions;
