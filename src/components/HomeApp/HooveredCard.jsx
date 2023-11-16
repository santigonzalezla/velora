import style from './HomeApp.module.css'
import {Card} from "react-bootstrap";


const HooveredCard = ({title, value, percentage}) =>
{
    return (
        <Card className={style.HooveredCard}>
            <Card.Title className={style.HooveredCardTitle}>{title}</Card.Title>
            <Card.Text className={style.HooveredCardValue}>{value}</Card.Text>
            <Card.Text className={style.HooveredCardPercentage}><span>{percentage}</span> mes anterior</Card.Text>
        </Card>
    );
}

export default HooveredCard;