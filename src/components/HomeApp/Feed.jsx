import style from './HomeApp.module.css'
import LogoSide from '../../assets/img/HomeApp/Feed/logoside.png'
import userPhoto from '../../assets/img/HomeApp/Feed/userPhoto.png'
import postImg from '../../assets/img/HomeApp/Feed/postImg.png'

const Feed = () => {
  return (
    <main id={style.Feed}>
      <div>
        <img src={LogoSide} alt="" id={style.LogoSide} />
      </div>
      <div className={style.Post}>
        <div className={style.porfile}>
          <img src={userPhoto} alt="" className={style.userPhoto} />
          <div className={style.userData}>
            <span className={style.userNick}>Beautyful Mouse</span>
            <span>@beautyfulmuse112</span>
          </div>
        </div>
        <div className={style.PostContent}>
          <img src={postImg} alt="" className={style.PostImg} />
          <div className={style.PostReaction}>

          </div>
          <p className={style.postTxt}>Lorem ipsum dolor sit amet, Cum sociis natoque penatibus et magnis dis parturient. Purus faucibus ornare suspendisse sed nisi lacus sed. </p>
          <p>View more...</p>
        </div>
      </div>
    </main>
  );
}

export default Feed;
