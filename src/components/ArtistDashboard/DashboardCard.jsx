import style from './ArtistApp.module.css';
import {Card} from "react-bootstrap";

const DashboardCard = ({ title, value, percentage }) =>
{
    return (
        <Card className={style.HooveredCard}>
            <Card.Title className={style.HooveredCardTitle}>{title}</Card.Title>
            <Card.Text className={style.HooveredCardValue}>{value} USD</Card.Text>
            <Card.Text className={style.HooveredCardPercentage}><span>{percentage}</span> mes anterior</Card.Text>
        </Card>
    );
}

export default DashboardCard;