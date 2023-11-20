import style from './ArtistApp.module.css'
import {Row, Col, Container, Card} from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import Grafic from '../../assets/img/ArtistApp/ArtistDashboard/grafic.png'
import HooveredCard from "../HomeApp/HooveredCard.jsx";

const ArtistDashboard = () => {
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
                        <div className={style.Balance}>
                            <div className={style.BalanceChart}>
                                <img src={Grafic} alt="" width="100%"/>
                            </div>
                            <div className={style.BalanceInfo}>
                                <div className={style.BalanceInfoItem}>
                                    <span>Balance</span>
                                    <div className={style.BalanceInfoItemPrice}>
                                        <div className={style.BalanceInfoItemCircle}>

                                        </div>
                                        <span>80 USD</span>
                                    </div>
                                </div>
                                <div className={style.BalanceInfoItem}>
                                    <span>Eventos</span>
                                    <div className={style.BalanceInfoItemPrice}>
                                        <div className={style.BalanceInfoItemCircle}>

                                        </div>
                                        <span>80 USD</span>
                                    </div>
                                </div>
                                <div className={style.BalanceInfoItem}>
                                    <span>Cuentas</span>
                                    <div className={style.BalanceInfoItemPrice}>
                                        <div className={style.BalanceInfoItemCircle}>

                                        </div>
                                        <span>80 USD</span>
                                    </div>
                                </div>
                                <div className={style.BalanceInfoItem}>
                                    <span>Paquete 1</span>
                                    <div className={style.BalanceInfoItemPrice}>
                                        <div className={style.BalanceInfoItemCircle}>

                                        </div>
                                        <span>80 USD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="3" md="3" lg="3" className={style.DashboardCards}>
                        <Card className={style.HooveredCard}>
                            <Card.Title className={style.HooveredCardTitle}>Transacciones</Card.Title>
                            <Card.Text className={style.HooveredCardValue}>35 USD</Card.Text>
                            <Card.Text className={style.HooveredCardPercentage}><span>20%</span> mes anterior</Card.Text>
                        </Card>
                        <Card className={style.HooveredCard}>
                            <Card.Title className={style.HooveredCardTitle}>Transacciones</Card.Title>
                            <Card.Text className={style.HooveredCardValue}>35 USD</Card.Text>
                            <Card.Text className={style.HooveredCardPercentage}><span>20%</span> mes anterior</Card.Text>
                        </Card>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <section className={style.Dates}>
                            <h5>Esta semana</h5>
                            <div className={style.itemsDates}>
                                <p>Cita virtual con @usuariocliente 11:00 am</p>
                                <span>bit.ly/3253</span>
                            </div>
                            <div className={style.itemsDates}>
                                <p>Cita virtual con @usuariocliente 11:00 am</p>
                                <span>bit.ly/3253</span>
                            </div>
                            <div className={style.itemsDates}>
                                <p>Cita virtual con @usuariocliente 11:00 am</p>
                                <span>bit.ly/3253</span>
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row className={style.rowDashboard}>
                    <Col xs="12" sm="7" md="7" lg="7" className={style.salesReportCharts}>
                        <section className={style.salesReport}>
                            <div className={style.salesReportBalance}>
                                <p className={style.HooveredCardTitle}>paquetes vendidos</p>
                                <h3 className={style.HooveredCardValue}>35 USD</h3>
                                <p className={style.HooveredCardPercentage}><span>12%+ </span>mes anterior</p>
                            </div>
                            <div className={style.bestSalers}>
                                <p>más vendidos</p>
                                <div className={style.bestSalersItems}>
                                    <p>lorem ipsum</p>
                                    <p>lorem ipsum</p>
                                    <p>lorem ipsum</p>
                                    <p>lorem ipsum</p>
                                </div>
                            </div>
                        </section>
                        <section className={style.salesReport}>
                            <div className={style.salesReportBalance}>
                                <p className={style.HooveredCardTitle}>Paquete 1</p>
                                <h3 className={style.HooveredCardValue}>35</h3>
                                <p className={style.HooveredCardPercentage}><span>12%+ </span>mes anterior</p>
                            </div>
                            <div className={style.salesReportBalance}>
                                <p className={style.HooveredCardTitle}>Paquete 1</p>
                                <h3 className={style.HooveredCardValue}>35</h3>
                                <p className={style.HooveredCardPercentage}><span>12%+ </span>mes anterior</p>
                            </div>
                            <div className={style.salesReportBalanceFinal}>
                                <p className={style.HooveredCardTitle}>Paquete 1</p>
                                <h3 className={style.HooveredCardValue}>35</h3>
                                <p className={style.HooveredCardPercentage}><span>12%+ </span>mes anterior</p>
                            </div>
                        </section>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ArtistDashboard;