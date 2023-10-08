import style from './ArtistApp.module.css'
import { Image } from 'react-bootstrap';
import imgCard from '../../assets/img/HomeApp/Suggestions/imgCard.png'
import userPhoto from '../../assets/img/HomeApp/Suggestions/userPhoto.png'
import Logo from '../../assets/img/HomeApp/Suggestions/logoside.png'

const SuggetionsArtist = () => {
  return (
    <div id={style.Suggetions}>
      <article id={style.SuggetionsContainer}>
        <section>
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
        </section>
        <section id={style.SuggetionsPaginate}>
          <div className={style.SuggArrows}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9101 6.70992C14.8176 6.61722 14.7077 6.54367 14.5867 6.49349C14.4658 6.44331 14.3361 6.41748 14.2051 6.41748C14.0742 6.41748 13.9445 6.44331 13.8235 6.49349C13.7025 6.54367 13.5926 6.61722 13.5001 6.70992L8.91012 11.2999C8.81742 11.3924 8.74387 11.5023 8.69369 11.6233C8.64351 11.7443 8.61768 11.874 8.61768 12.0049C8.61768 12.1359 8.64351 12.2656 8.69369 12.3865C8.74387 12.5075 8.81742 12.6174 8.91012 12.7099L13.5001 17.2999C13.5927 17.3925 13.7026 17.4659 13.8236 17.5161C13.9445 17.5662 14.0742 17.5919 14.2051 17.5919C14.3361 17.5919 14.4657 17.5662 14.5867 17.5161C14.7076 17.4659 14.8175 17.3925 14.9101 17.2999C15.0027 17.2073 15.0761 17.0974 15.1262 16.9765C15.1764 16.8555 15.2021 16.7259 15.2021 16.5949C15.2021 16.464 15.1764 16.3343 15.1262 16.2134C15.0761 16.0924 15.0027 15.9825 14.9101 15.8899L11.0301 11.9999L14.9101 8.11992C15.2901 7.72992 15.2901 7.08992 14.9101 6.70992Z" fill="#373B56" /></svg>
            <span> 1 </span>
            <span> 2 </span>
            <span> 3 </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.31002 6.71002C9.21732 6.80254 9.14377 6.91242 9.09359 7.0334C9.04341 7.15437 9.01758 7.28405 9.01758 7.41502C9.01758 7.54599 9.04341 7.67567 9.09359 7.79665C9.14377 7.91762 9.21732 8.02751 9.31002 8.12002L13.19 12L9.31002 15.88C9.12304 16.067 9.018 16.3206 9.018 16.585C9.018 16.8494 9.12304 17.103 9.31002 17.29C9.497 17.477 9.7506 17.582 10.015 17.582C10.2794 17.582 10.533 17.477 10.72 17.29L15.31 12.7C15.4027 12.6075 15.4763 12.4976 15.5265 12.3766C15.5766 12.2557 15.6025 12.126 15.6025 11.995C15.6025 11.8641 15.5766 11.7344 15.5265 11.6134C15.4763 11.4924 15.4027 11.3825 15.31 11.29L10.72 6.70002C10.34 6.32002 9.70002 6.32002 9.31002 6.71002Z" fill="#373B56" /></svg>
          </div>
          <div className={style.SuggTerms}>
            <span>Terms of service</span>
            <span>Cookies</span>
            <span>PrivacyPolice</span>
          </div>
        </section>
      </article>
      <section id={style.SuggLogo}>
        <img src={Logo} alt="" width={350} />
      </section>
    </div>
  );
}

export default SuggetionsArtist;
