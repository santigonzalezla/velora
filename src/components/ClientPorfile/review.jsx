import { React } from 'react';
import style from './ArtistApp.module.css';
import { FaStar } from 'react-icons/fa';

const Review = (props) => {
    const { rater_id, stars, review } = props;
    return (
        <div className={style.itemReview}>
            <h5>{stars}</h5>
            <div>
                <div className={style.StarsReview}>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={i}>
                                <input type="radio" name="rating" />
                                <FaStar
                                    size={20}
                                    className='star'
                                    color={ratingValue <= (stars) ? "" : "#e4e5e9"}
                                />
                            </label>
                        )
                    })}
                </div>
                <p>{review || ""}</p>
            </div>
        </div>
    );
};

export default Review;
