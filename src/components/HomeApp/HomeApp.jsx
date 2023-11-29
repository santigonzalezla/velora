import style from './HomeApp.module.css'
import {Col, Row, Container, Card} from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import Stories from '../Stories/Stories';
import Feed from '../Feed/Feed'
import Suggetions from '../Suggetions/Suggetions';
import Logo from '../../assets/img/HomeApp/SideBar/logo.png';
import Google from '../../assets/img/HomeApp/SideBar/GOOGLE.png';
import Chart from '../../assets/img/HomeApp/SideBar/chart.png';
import HooveredCard from "./HooveredCard.jsx";

const values = {
    title: "Transacciones",
    value: "35",
    transactions: "3",
    percentage: "+20%"
}

const stablisment = {
    title: "ESTABLECIMIENTO",
    description: "DESCRIPCION",
    email: "info@velora.com",
}

const HomeApp = () =>
{
    return (
        <div id={style.HomeApp}>
            <SideBar/>
            <Container id={style.ContentHomeApp} fluid>
                <Row className={style.HomeAppTop}>
                    <div className={style.HomeAppTopLeft}>
                        <div className={style.HomeAppTopLeftCard}>
                            <Card className={style.HomeAppTopCard}>
                                {values.value}USD
                            </Card>
                            <p>Valor total transaciones</p>
                        </div>
                        <div className={style.HomeAppTopLeftCard}>
                            <Card className={style.HomeAppTopCard}>
                                {values.transactions}
                            </Card>
                            <p>Posición publicitaria</p>
                        </div>
                        <button>Ver Más</button>
                    </div>
                    <div className={style.HomeAppTopRight}>
                        <img src={Logo} alt=""/>
                    </div>
                </Row>
                <Row className={style.HomeAppBottom}>
                    <Col xs="12" sm="8" md="8" lg="3" className={style.HomeAppBottomLeft}>
                        <Card className={style.HomeAppBottomLeftCard}>
                            <img src={Google} alt="" />
                            <Card.Title>{stablisment.title}</Card.Title>
                            <Card.Text>{stablisment.description}</Card.Text>
                            <Card.Text>NEGOCIO: {stablisment.email}</Card.Text>
                        </Card>
                        <HooveredCard
                            title={"Transacciones"}
                            value={"35"}
                            percentage={"20%"}
                        />
                        <HooveredCard
                            title={"Transacciones"}
                            value={"35"}
                            percentage={"+20%"}
                        />
                    </Col>
                    <Col xs="12" sm="8" md="8" lg="9" className={style.HomeAppBottomRight}>
                        <div className={style.HomeAppBottomRightRow}>
                            <HooveredCard
                                title={"Clicks"}
                                value={"35"}
                                percentage={"+20%"}
                            />
                            <HooveredCard
                                title={"Eventos"}
                                value={"5"}
                                percentage={"+20%"}
                            />
                            <HooveredCard
                                title={"Artitas Conectados"}
                                value={"102"}
                                percentage={"20%"}
                            />
                        </div>
                        <Card className={style.HomeAppBottomRightCard}>
                            <img src={Chart} alt=""/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeApp;
