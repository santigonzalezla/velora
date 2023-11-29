import style from "../SuggetionsArtist/ArtistApp.module.css";
import {Image} from "react-bootstrap";

const SuggestionCard = ({img, userPhoto, user, description}) =>
{
    return (
        <section className={style.SuggetionsCard}>
            <div>
                <Image src={img} fluid/>
            </div>
            <div className={style.SuggetionsContent}>
                <Image src={userPhoto} className={style.userPhoto}/>
                <div className={style.SuggetionsText}>
                    <h5>{user}</h5>
                    <span>{description}</span>
                </div>
            </div>
        </section>
    );
}

export default SuggestionCard;