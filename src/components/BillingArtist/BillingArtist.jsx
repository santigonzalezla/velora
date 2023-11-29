import style from './ArtistApp.module.css'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import Chart from "../../assets/img/HomeApp/SideBar/chart.png";
import HooveredCard from "../HomeApp/HooveredCard.jsx";
import CampaingCard from "./CampaingCard.jsx";
import DashboardCard from "./DashboardCard.jsx";

const campaings = [
    {
        filter: "Filtro aplicado 1",
        title: "Campaña 1",
        value: "35",
        percentage: "+20%"
    },
    {
        filter: "Filtro aplicado 2",
        title: "Campaña 2",
        value: "35",
        percentage: "+20%"
    },
    {
        filter: "Filtro aplicado 3",
        title: "Campaña 3",
        value: "35",
        percentage: "+20%"
    },
    {
        filter: "Filtro aplicado 4",
        title: "Campaña 4",
        value: "35",
        percentage: "+20%"
    },
    {
        filter: "Filtro aplicado 5",
        title: "Campaña 5",
        value: "35",
        percentage: "+20%"
    },
]

const cardInfo = [
    {
        title: "Transacciones",
        value: "35",
        percentage: "+20"
    }
]

const BillingArtist = () => {
    return (
        <div id={style.Billings}>
            <SideBarArtist/>
            <div id={style.BillingContainer}>
                <div className={style.rowDashboard}>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <section className={style.Head}>
                            <h3>Billing</h3>
                            <img src={Logo} id={style.LogoDashboard}/>
                        </section>
                    </Col>
                </div>
                <Row>
                    <Col xs="12" sm="12" md="9" lg="9" className={style.BillingLeft}>
                        <Row className={style.BillingLeftTop}>
                            <Col xs="12" sm="12" md="12" lg="12" className={style.BillingChart}>
                                <Card className={style.BillingChartCard}>
                                    <img src={Chart} alt=""/>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="12" md="6" lg="6">
                                <CampaingCard campaings={campaings} />
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6">
                                <CampaingCard campaings={campaings} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" className={style.DashboardCards}>
                        <DashboardCard
                            title={"Transacciones"}
                            value={"30"}
                            percentage={"+20%"}
                        />
                        <DashboardCard
                            title={"Transacciones"}
                            value={"30"}
                            percentage={"+20%"}
                        />
                        <DashboardCard
                            title={"Transacciones"}
                            value={"30"}
                            percentage={"+20%"}
                        />
                        <DashboardCard
                            title={"Transacciones"}
                            value={"30"}
                            percentage={"+20%"}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default BillingArtist;