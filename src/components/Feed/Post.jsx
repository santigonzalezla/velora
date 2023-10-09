import style from './HomeApp.module.css'
import { Image } from 'react-bootstrap'
import userPhoto from '../../assets/img/HomeApp/Feed/userPhoto.png'
import commentReaction from '../../assets/img/HomeApp/Feed/commentReaction.png'
import heartReaction from '../../assets/img/HomeApp/Feed/heartReaction.png'
import donationReaction from '../../assets/img/HomeApp/Feed/donationReaction.png'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { useState } from 'react';


const Post = (props) => {
  const { postId, postText, postImages, artistName, artistUsername, handleLike } = props;
  const [likedPost, setLikedPost] = useState(false);

  const likeClicked = () => {
    setLikedPost(true);
    handleLike(postId);
  }

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
                    {image[1].split("/")[0] === "video" ?
                      <video src={image[0]} className={style.postImg} controls /> :
                      <Image src={image[0]} alt="" className={style.postImg} fluid />
                    }
                  </Carousel.Item>
                ))
              }
            </Carousel>
            :
            <div>
              {postImages[0][1].split("/")[0] === "video" ?
                <video src={postImages[0][0]} className={style.postImg} controls /> :
                <Image src={postImages[0][0]} alt="" className={style.postImg} fluid />
              }
            </div>
        }

        <div className={style.PostReaction}>
          < Image src={commentReaction} alt="" className={style.iconsReaction} fluid />
          <AiFillHeart size={50} className={style.iconsReaction} color={likedPost ? "red" : ""} onClick={() => likeClicked()} />
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