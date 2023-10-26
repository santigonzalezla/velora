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
              {postImages.length > 0 ?
                (postImages[0][1].split("/")[0] === "video" ?
                  <video src={postImages[0][0]} className={style.postImg} controls /> :
                  <Image src={postImages[0][0]} alt="" className={style.postImg} fluid />
                ) : <>  </>
              }
            </div>
        }

        <div className={style.PostReaction}>
          < Image src={commentReaction} alt="" className={style.iconsReaction} fluid />
          <span>12k</span>
          <AiFillHeart size={50} className={style.iconsReaction} color={likedPost ? "red" : ""} onClick={() => likeClicked()} />
          <span>12k</span>
          < Image src={donationReaction} alt="" className={style.iconsReaction} fluid />
          <span>12k</span>
          <svg width="50" height="29" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2103 2.87793H11.8343C11.427 2.87793 11.0363 3.03976 10.7482 3.32781C10.4602 3.61587 10.2983 4.00656 10.2983 4.41393V15.1659C10.2983 15.5733 10.4602 15.964 10.7482 16.252C11.0363 16.5401 11.427 16.7019 11.8343 16.7019H22.5863C22.9937 16.7019 23.3844 16.5401 23.6725 16.252C23.9605 15.964 24.1223 15.5733 24.1223 15.1659V9.78993" stroke="#373B56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.6904 3.38981L23.6104 5.30981M15.2904 9.78981L14.6504 12.3498L17.2104 11.7098L24.6254 4.29477C24.8654 4.05473 25.0002 3.72922 25.0002 3.38981C25.0002 3.0504 24.8654 2.72488 24.6254 2.48485L24.5154 2.37477C24.2753 2.1348 23.9498 2 23.6104 2C23.271 2 22.9455 2.1348 22.7054 2.37477L15.2904 9.78981Z" stroke="#373B56" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

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