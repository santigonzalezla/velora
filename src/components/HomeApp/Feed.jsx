import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap'
import LogoSide from '../../assets/img/HomeApp/Feed/logoside.png'
import userPhoto from '../../assets/img/HomeApp/Feed/userPhoto.png'
import postImg from '../../assets/img/HomeApp/Feed/postImg.png'
import commentReaction from '../../assets/img/HomeApp/Feed/commentReaction.png'
import heartReaction from '../../assets/img/HomeApp/Feed/heartReaction.png'
import donationReaction from '../../assets/img/HomeApp/Feed/donationReaction.png'

const Feed = () => {
  return (
    <main id={style.Feed}>
      <div>
        < Image src={LogoSide} alt="" id={style.LogoSide} fluid />
      </div>
      <div className={style.Post}>
        <div className={style.porfile}>
          < Image src={userPhoto} alt="" className={style.userPhoto} fluid />
          <div className={style.userData}>
            <span className={style.userNick}>Beautyful Mouse</span>
            <span>@beautyfulmuse112</span>
          </div>
        </div>
        <div className={style.PostContent}>
          < Image src={postImg} alt="" className={style.PostImg} fluid />
          <div className={style.PostReaction}>
            < Image src={commentReaction} alt="" className={style.iconsReaction} fluid />
            < Image src={heartReaction} alt="" className={style.iconsReaction} fluid />
            < Image src={donationReaction} alt="" className={style.iconsReaction} fluid />
          </div>
          <div className={style.postDescription}>
            <p className={style.postTxt}>Lorem ipsum dolor sit amet, Cum sociis natoque penatibus et magnis dis parturient. Purus faucibus ornare suspendisse sed nisi lacus sed. </p>
            <p className={style.postViewMore}>View more...</p>
          </div>
        </div>
      </div>
      <div className={style.Post}>
        <div className={style.porfile}>
          < Image src={userPhoto} alt="" className={style.userPhoto} fluid />
          <div className={style.userData}>
            <span className={style.userNick}>Beautyful Mouse</span>
            <span>@beautyfulmuse112</span>
          </div>
        </div>
        <div className={style.PostContent}>
          < Image src={postImg} alt="" className={style.PostImg} fluid />
          <div className={style.PostReaction}>
            < Image src={commentReaction} alt="" className={style.iconsReaction} fluid />
            < Image src={heartReaction} alt="" className={style.iconsReaction} fluid />
            < Image src={donationReaction} alt="" className={style.iconsReaction} fluid />
          </div>
          <div className={style.postDescription}>
            <p className={style.postTxt}>Lorem ipsum dolor sit amet, Cum sociis natoque penatibus et magnis dis parturient. Purus faucibus ornare suspendisse sed nisi lacus sed. </p>
            <p className={style.postViewMore}>View more...</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Feed;
