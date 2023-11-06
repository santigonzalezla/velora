import {Row, Col, Container, Card} from 'react-bootstrap';
import style from './Company.module.css'
import BeImg from "../../assets/img/Company/companybottomback.png";

const CalendarCompany = () =>
{
    return (
        <div>
            <Container className={style.Calendar}>
                <img src={BeImg} alt="" id={style.CalendarImg}/>
                <Row className={style.CalendarContainer}>
                    <Col sm="6" md="6" lg="6" xl="6" className={style.CalendarCardContainer}>
                        <div className={style.CalendarCard}>
                            <h1>Acceso a artistas Velora</h1>
                            <div className={style.CalendarCardCont}>
                                <h1>25</h1>
                                <h3>usd/mes</h3>
                            </div>
                        </div>
                        <button>Comprar servicio</button>
                    </Col>
                    <Col sm="6" md="6" lg="6" xl="6" className={style.CalendarCardContainer}>
                        <div className={style.CalendarCard}>
                            <h1>Acceso a publicidad Velora</h1>
                            <div className={style.CalendarCardCont}>
                                <h1>25</h1>
                                <h3>usd/mes</h3>
                            </div>
                        </div>
                        <button>Comprar servicio</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CalendarCompany;