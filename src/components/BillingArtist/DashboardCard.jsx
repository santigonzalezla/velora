import style from "./ArtistApp.module.css";
import {Card} from "react-bootstrap";

const DashboardCard = ({ title, value, percentage, color }) =>
{
    return (
        <Card className={style.HooveredCardRight}>
            <Card.Title className={style.HooveredCardRightTitle}>{title}</Card.Title>
            <Card.Text className={style.HooveredCardRightValue}>{value} USD</Card.Text>
            <Card.Text className={style.HooveredCardRightPercentage}><span>{percentage}%</span> mes anterior</Card.Text>
        </Card>
    );
}

export default DashboardCard;