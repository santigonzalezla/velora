import style from './ArtistApp.module.css'
import {Row, Col, Container, Card} from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import Grafic from '../../assets/img/ArtistApp/ArtistDashboard/grafic.png'
import HooveredCard from "../HomeApp/HooveredCard.jsx";
import Chart from "./Chart.jsx";
import DashboardCard from "./DashboardCard.jsx";
import Scheduler from "./Scheduler.jsx";
import SalesReport from "./SalesReport.jsx";

const ArtistDashboard = () =>
{
    const chartVariables = [
        {
            name: "Balance",
            value: 80,
        },
        {
            name: "Eventos",
            value: 35,
        },
        {
            name: "Cuentas",
            value: 40,
        },
        {
            name: "Paquete 1",
            value: 80,
        },
    ]

    const cardValues = [
        {
            title: "Transacciones",
            value: 35,
            percentage: "20%",
        },
        {
            title: "Transacciones",
            value: 35,
            percentage: "20%",
        },
    ]

    const datosScheduler = [
        {
            type: "Cita Virtual",
            user: "@usuariocliente",
            time: "11:00 am",
            link: "bit.ly/3253",
        },
        {
            type: "Cita Presencial",
            user: "@usuariovip",
            time: "01:00 pm",
            link: "bit.ly/3253",
        },
        {
            type: "Cita Virtual",
            user: "@usuariocliente",
            time: "11:00 am",
            link: "bit.ly/3253",
        }
    ]

    const packages = [
        {
            name: "Paquete 1",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 2",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 3",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 4",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 5",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 6",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 7",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 8",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 9",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
        {
            name: "Paquete 10",
            value: 2,
            percentage: "20%",
            sales: 35,
        },
    ]

    return (
        <div id={style.ArtistDashboard}>
            <SideBarArtist/>
            <div id={style.ContainerArtistDashboard}>
                <div className={style.rowDashboard}>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <section className={style.Head}>
                            <h3>Dashboard</h3>
                            <img src={Logo} id={style.LogoDashboard}/>
                        </section>
                    </Col>
                </div>
                <Row className={style.rowDashboard}>
                    <Col xs="12" sm="5" md="5" lg="5" className={style.rowCards}>
                        <Chart chartVariables={chartVariables} />
                    </Col>
                    <Col xs="12" sm="3" md="3" lg="3" className={style.DashboardCards}>
                        {cardValues.map((cardValue, index) => (
                            <DashboardCard value={cardValue.value} title={cardValue.title} percentage={cardValue.percentage} />
                        ))}
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <Scheduler datosScheduler={datosScheduler} />
                    </Col>
                </Row>
                <Row className={style.rowDashboard}>
                    <Col xs="12" sm="7" md="7" lg="7" className={style.salesReportCharts}>
                        <SalesReport packages={packages} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ArtistDashboard;