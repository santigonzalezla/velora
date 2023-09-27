import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap'
import userPhoto from '../../assets/img/HomeApp/Feed/userPhoto.png'
import commentReaction from '../../assets/img/HomeApp/Feed/commentReaction.png'
import heartReaction from '../../assets/img/HomeApp/Feed/heartReaction.png'
import donationReaction from '../../assets/img/HomeApp/Feed/donationReaction.png'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'


const Post = (props) => {
  const { postText, postImages, artistName, artistUsername } = props;

  return (
    <div className={style.Post}>
        <div className={style.porfile}>
          <Link to={`/ViewArtist/${artistUsername}`}>
            < Image src={userPhoto} alt="" className={style.userPhoto} fluid />
          </Link>
          <div className={style.userData}>
          <span className={style.userNick}>{artistName}</span>
          <span>@{artistUsername}</span>
        </div>
      </div>
      <div className={style.PostContent}>
      {
          postImages.length > 1 ?
            <Carousel interval={null}>
              {
                postImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <Image src={image} alt="" className={style.postImg} fluid />
                  </Carousel.Item>
                ))
              }
            </Carousel>
            :
            <Image src={postImages[0]} alt="" className={style.postImg} fluid />
        }

        <div className={style.PostReaction}>
          < Image src={commentReaction} alt="" className={style.iconsReaction} fluid />
          < Image src={heartReaction} alt="" className={style.iconsReaction} fluid />
          < Image src={donationReaction} alt="" className={style.iconsReaction} fluid />
        </div>
        <div className={style.postDescription}>
          <p className={style.postTxt}>{postText}</p>
          <p className={style.postViewMore}>View more...</p>
        </div>
      </div>
    </div>
  );
}

export default Post;