import style from './ArtistApp.module.css'
import {Row, Col, Container} from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import Grafic from '../../assets/img/ArtistApp/ArtistDashboard/grafic.png'

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
                    <Col xs="12" sm="5" md="5" lg="5">
                        <div className={style.Balance}>
                            <div className={style.BalanceChart}>
                                <img src={Grafic} alt="" width={480}/>
                            </div>
                            <div className={style.BalanceInfo}>
                                <div className={style.BalanceInfoItem}>
                                    <p>Balance</p>
                                    <div className={style.BalanceInfoItem}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="3" md="3" lg="3">
                        <div className={style.monthlyIncome}>
                            <p>ingreso mensual</p>
                            <div>
                                <h3>35</h3>
                                <h5>USD</h5>
                            </div>
                            <p><span>+12%</span> mes anterior</p>
                        </div>
                        <div className={style.monthlyIncome}>
                            <p>ingreso mensual</p>
                            <div>
                                <h3>35</h3>
                                <h5>USD</h5>
                            </div>
                            <p><span>+12%</span> mes anterior</p>
                        </div>
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
                    <Col xs="12" sm="7" md="7" lg="7">
                        <section className={style.salesReport}>
                            <div className={style.salesReportBalance}>
                                <p>paquetes vendidos</p>
                                <h3>35</h3>
                                <p><span>12%+ </span>mes anterior</p>
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
                                <p>paquetes vendidos</p>
                                <h3>35</h3>
                                <p><span>12%+ </span>mes anterior</p>
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
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ArtistDashboard;