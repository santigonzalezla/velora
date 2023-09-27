import style from './HomeApp.module.css'
import SideBar from '../SideBar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Billing/Logo.png'
import PayMethod from '../../assets/img/HomeApp/Billing/PayMethod.png'
import HistoralBilling from '../Billing/HistoralBilling';

const BuyCoins = () => {
  return (
    <div id={style.BuyCoins}>
      <SideBar />
      <Container id={style.BuyCoinsContent} fluid>
        <Row>
          <Col xs="12" sm="9" md="9" lg="9">
            <section id={style.BuyCoinsContainer} >
              <Container>
                <Row id={style.TransactionsBuyCoins}>
                  <section>
                    <h5>Métodos de pago</h5>
                  </section>
                  <Row className={style.TransactionsRows}>
                    <Col className={style.TransactionsName}>
                      <img src={PayMethod} alt="" width={50} />
                      <div className={style.TransactionsItem}>
                        <h6>Lorem ipsum</h6>
                        <p>Lorem ipsum</p>
                      </div>
                    </Col>
                    <Col className={style.TransactionsOptions}>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_4700)"><path d="M8 0.472733C3.58175 0.472733 0 4.05448 0 8.47273C0 12.8912 3.58175 16.4727 8 16.4727C12.4185 16.4727 16 12.8912 16 8.47273C16 4.05448 12.4185 0.472733 8 0.472733ZM8 15.4885C4.14025 15.4885 1 12.3325 1 8.4727C1 4.61295 4.14025 1.4727 8 1.4727C11.8597 1.4727 15 4.61297 15 8.4727C15 12.3324 11.8597 15.4885 8 15.4885ZM11.1927 5.54548L6.49898 10.2687L4.38523 8.15498C4.18998 7.95973 3.87348 7.95973 3.67798 8.15498C3.48273 8.35023 3.48273 8.66673 3.67798 8.86198L6.15273 11.337C6.34798 11.532 6.66448 11.532 6.85998 11.337C6.88248 11.3145 6.90175 11.29 6.91925 11.2645L11.9003 6.25272C12.0953 6.05747 12.0953 5.74097 11.9003 5.54548C11.7048 5.35023 11.3883 5.35023 11.1927 5.54548Z" fill="#373B56" /></g><defs><clipPath id="clip0_1_4700"><rect width="16" height="16" fill="white" transform="translate(0 0.472733)" /></clipPath></defs></svg>
                        <span>Principal</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4375 10.1956L5.0625 10.8031L5.625 7.38313L12.0712 0.959383C12.1758 0.853938 12.3003 0.770245 12.4374 0.71313C12.5744 0.656015 12.7215 0.62661 12.87 0.62661C13.0185 0.62661 13.1656 0.656015 13.3026 0.71313C13.4397 0.770245 13.5642 0.853938 13.6687 0.959383L14.8613 2.15188C14.9667 2.25647 15.0504 2.38089 15.1075 2.51798C15.1646 2.65508 15.194 2.80212 15.194 2.95063C15.194 3.09915 15.1646 3.24619 15.1075 3.38328C15.0504 3.52037 14.9667 3.6448 14.8613 3.74938L8.4375 10.1956Z" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 10.758V14.133C13.5 14.4313 13.3815 14.7175 13.1705 14.9285C12.9595 15.1394 12.6734 15.258 12.375 15.258H1.6875C1.38913 15.258 1.10298 15.1394 0.892005 14.9285C0.681026 14.7175 0.5625 14.4313 0.5625 14.133V3.44546C0.5625 3.14709 0.681026 2.86094 0.892005 2.64996C1.10298 2.43898 1.38913 2.32046 1.6875 2.32046H5.0625" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span>Editar</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7.16818H7.875V13.9182H6.75V7.16818ZM10.125 7.16818H11.25V13.9182H10.125V7.16818Z" fill="#373B56" /><path d="M2.25 3.79318V4.91818H3.375V16.1682C3.375 16.4666 3.49353 16.7527 3.7045 16.9637C3.91548 17.1747 4.20163 17.2932 4.5 17.2932H13.5C13.7984 17.2932 14.0845 17.1747 14.2955 16.9637C14.5065 16.7527 14.625 16.4666 14.625 16.1682V4.91818H15.75V3.79318H2.25ZM4.5 16.1682V4.91818H13.5V16.1682H4.5ZM6.75 1.54318H11.25V2.66818H6.75V1.54318Z" fill="#373B56" /></svg>
                        <span>Eliminar</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className={style.TransactionsRows}>
                    <Col className={style.TransactionsName}>
                      <img src={PayMethod} alt="" width={50} />
                      <div className={style.TransactionsItem}>
                        <h6>Lorem ipsum</h6>
                        <p>Lorem ipsum</p>
                      </div>
                    </Col>
                    <Col className={style.TransactionsOptions}>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_4700)"><path d="M8 0.472733C3.58175 0.472733 0 4.05448 0 8.47273C0 12.8912 3.58175 16.4727 8 16.4727C12.4185 16.4727 16 12.8912 16 8.47273C16 4.05448 12.4185 0.472733 8 0.472733ZM8 15.4885C4.14025 15.4885 1 12.3325 1 8.4727C1 4.61295 4.14025 1.4727 8 1.4727C11.8597 1.4727 15 4.61297 15 8.4727C15 12.3324 11.8597 15.4885 8 15.4885ZM11.1927 5.54548L6.49898 10.2687L4.38523 8.15498C4.18998 7.95973 3.87348 7.95973 3.67798 8.15498C3.48273 8.35023 3.48273 8.66673 3.67798 8.86198L6.15273 11.337C6.34798 11.532 6.66448 11.532 6.85998 11.337C6.88248 11.3145 6.90175 11.29 6.91925 11.2645L11.9003 6.25272C12.0953 6.05747 12.0953 5.74097 11.9003 5.54548C11.7048 5.35023 11.3883 5.35023 11.1927 5.54548Z" fill="#373B56" /></g><defs><clipPath id="clip0_1_4700"><rect width="16" height="16" fill="white" transform="translate(0 0.472733)" /></clipPath></defs></svg>
                        <span>Principal</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4375 10.1956L5.0625 10.8031L5.625 7.38313L12.0712 0.959383C12.1758 0.853938 12.3003 0.770245 12.4374 0.71313C12.5744 0.656015 12.7215 0.62661 12.87 0.62661C13.0185 0.62661 13.1656 0.656015 13.3026 0.71313C13.4397 0.770245 13.5642 0.853938 13.6687 0.959383L14.8613 2.15188C14.9667 2.25647 15.0504 2.38089 15.1075 2.51798C15.1646 2.65508 15.194 2.80212 15.194 2.95063C15.194 3.09915 15.1646 3.24619 15.1075 3.38328C15.0504 3.52037 14.9667 3.6448 14.8613 3.74938L8.4375 10.1956Z" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 10.758V14.133C13.5 14.4313 13.3815 14.7175 13.1705 14.9285C12.9595 15.1394 12.6734 15.258 12.375 15.258H1.6875C1.38913 15.258 1.10298 15.1394 0.892005 14.9285C0.681026 14.7175 0.5625 14.4313 0.5625 14.133V3.44546C0.5625 3.14709 0.681026 2.86094 0.892005 2.64996C1.10298 2.43898 1.38913 2.32046 1.6875 2.32046H5.0625" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span>Editar</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7.16818H7.875V13.9182H6.75V7.16818ZM10.125 7.16818H11.25V13.9182H10.125V7.16818Z" fill="#373B56" /><path d="M2.25 3.79318V4.91818H3.375V16.1682C3.375 16.4666 3.49353 16.7527 3.7045 16.9637C3.91548 17.1747 4.20163 17.2932 4.5 17.2932H13.5C13.7984 17.2932 14.0845 17.1747 14.2955 16.9637C14.5065 16.7527 14.625 16.4666 14.625 16.1682V4.91818H15.75V3.79318H2.25ZM4.5 16.1682V4.91818H13.5V16.1682H4.5ZM6.75 1.54318H11.25V2.66818H6.75V1.54318Z" fill="#373B56" /></svg>
                        <span>Eliminar</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className={style.TransactionsRows}>
                    <Col className={style.TransactionsName}>
                      <img src={PayMethod} alt="" width={50} />
                      <div className={style.TransactionsItem}>
                        <h6>Lorem ipsum</h6>
                        <p>Lorem ipsum</p>
                      </div>
                    </Col>
                    <Col className={style.TransactionsOptions}>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_4700)"><path d="M8 0.472733C3.58175 0.472733 0 4.05448 0 8.47273C0 12.8912 3.58175 16.4727 8 16.4727C12.4185 16.4727 16 12.8912 16 8.47273C16 4.05448 12.4185 0.472733 8 0.472733ZM8 15.4885C4.14025 15.4885 1 12.3325 1 8.4727C1 4.61295 4.14025 1.4727 8 1.4727C11.8597 1.4727 15 4.61297 15 8.4727C15 12.3324 11.8597 15.4885 8 15.4885ZM11.1927 5.54548L6.49898 10.2687L4.38523 8.15498C4.18998 7.95973 3.87348 7.95973 3.67798 8.15498C3.48273 8.35023 3.48273 8.66673 3.67798 8.86198L6.15273 11.337C6.34798 11.532 6.66448 11.532 6.85998 11.337C6.88248 11.3145 6.90175 11.29 6.91925 11.2645L11.9003 6.25272C12.0953 6.05747 12.0953 5.74097 11.9003 5.54548C11.7048 5.35023 11.3883 5.35023 11.1927 5.54548Z" fill="#373B56" /></g><defs><clipPath id="clip0_1_4700"><rect width="16" height="16" fill="white" transform="translate(0 0.472733)" /></clipPath></defs></svg>
                        <span>Principal</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4375 10.1956L5.0625 10.8031L5.625 7.38313L12.0712 0.959383C12.1758 0.853938 12.3003 0.770245 12.4374 0.71313C12.5744 0.656015 12.7215 0.62661 12.87 0.62661C13.0185 0.62661 13.1656 0.656015 13.3026 0.71313C13.4397 0.770245 13.5642 0.853938 13.6687 0.959383L14.8613 2.15188C14.9667 2.25647 15.0504 2.38089 15.1075 2.51798C15.1646 2.65508 15.194 2.80212 15.194 2.95063C15.194 3.09915 15.1646 3.24619 15.1075 3.38328C15.0504 3.52037 14.9667 3.6448 14.8613 3.74938L8.4375 10.1956Z" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 10.758V14.133C13.5 14.4313 13.3815 14.7175 13.1705 14.9285C12.9595 15.1394 12.6734 15.258 12.375 15.258H1.6875C1.38913 15.258 1.10298 15.1394 0.892005 14.9285C0.681026 14.7175 0.5625 14.4313 0.5625 14.133V3.44546C0.5625 3.14709 0.681026 2.86094 0.892005 2.64996C1.10298 2.43898 1.38913 2.32046 1.6875 2.32046H5.0625" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span>Editar</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7.16818H7.875V13.9182H6.75V7.16818ZM10.125 7.16818H11.25V13.9182H10.125V7.16818Z" fill="#373B56" /><path d="M2.25 3.79318V4.91818H3.375V16.1682C3.375 16.4666 3.49353 16.7527 3.7045 16.9637C3.91548 17.1747 4.20163 17.2932 4.5 17.2932H13.5C13.7984 17.2932 14.0845 17.1747 14.2955 16.9637C14.5065 16.7527 14.625 16.4666 14.625 16.1682V4.91818H15.75V3.79318H2.25ZM4.5 16.1682V4.91818H13.5V16.1682H4.5ZM6.75 1.54318H11.25V2.66818H6.75V1.54318Z" fill="#373B56" /></svg>
                        <span>Eliminar</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className={style.TransactionsRows}>
                    <Col className={style.TransactionsName}>
                      <img src={PayMethod} alt="" width={50} />
                      <div className={style.TransactionsItem}>
                        <h6>Lorem ipsum</h6>
                        <p>Lorem ipsum</p>
                      </div>
                    </Col>
                    <Col className={style.TransactionsOptions}>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_4700)"><path d="M8 0.472733C3.58175 0.472733 0 4.05448 0 8.47273C0 12.8912 3.58175 16.4727 8 16.4727C12.4185 16.4727 16 12.8912 16 8.47273C16 4.05448 12.4185 0.472733 8 0.472733ZM8 15.4885C4.14025 15.4885 1 12.3325 1 8.4727C1 4.61295 4.14025 1.4727 8 1.4727C11.8597 1.4727 15 4.61297 15 8.4727C15 12.3324 11.8597 15.4885 8 15.4885ZM11.1927 5.54548L6.49898 10.2687L4.38523 8.15498C4.18998 7.95973 3.87348 7.95973 3.67798 8.15498C3.48273 8.35023 3.48273 8.66673 3.67798 8.86198L6.15273 11.337C6.34798 11.532 6.66448 11.532 6.85998 11.337C6.88248 11.3145 6.90175 11.29 6.91925 11.2645L11.9003 6.25272C12.0953 6.05747 12.0953 5.74097 11.9003 5.54548C11.7048 5.35023 11.3883 5.35023 11.1927 5.54548Z" fill="#373B56" /></g><defs><clipPath id="clip0_1_4700"><rect width="16" height="16" fill="white" transform="translate(0 0.472733)" /></clipPath></defs></svg>
                        <span>Principal</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4375 10.1956L5.0625 10.8031L5.625 7.38313L12.0712 0.959383C12.1758 0.853938 12.3003 0.770245 12.4374 0.71313C12.5744 0.656015 12.7215 0.62661 12.87 0.62661C13.0185 0.62661 13.1656 0.656015 13.3026 0.71313C13.4397 0.770245 13.5642 0.853938 13.6687 0.959383L14.8613 2.15188C14.9667 2.25647 15.0504 2.38089 15.1075 2.51798C15.1646 2.65508 15.194 2.80212 15.194 2.95063C15.194 3.09915 15.1646 3.24619 15.1075 3.38328C15.0504 3.52037 14.9667 3.6448 14.8613 3.74938L8.4375 10.1956Z" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 10.758V14.133C13.5 14.4313 13.3815 14.7175 13.1705 14.9285C12.9595 15.1394 12.6734 15.258 12.375 15.258H1.6875C1.38913 15.258 1.10298 15.1394 0.892005 14.9285C0.681026 14.7175 0.5625 14.4313 0.5625 14.133V3.44546C0.5625 3.14709 0.681026 2.86094 0.892005 2.64996C1.10298 2.43898 1.38913 2.32046 1.6875 2.32046H5.0625" stroke="#373B56" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span>Editar</span>
                      </div>
                      <div className={style.TransactionsOptionsItem}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7.16818H7.875V13.9182H6.75V7.16818ZM10.125 7.16818H11.25V13.9182H10.125V7.16818Z" fill="#373B56" /><path d="M2.25 3.79318V4.91818H3.375V16.1682C3.375 16.4666 3.49353 16.7527 3.7045 16.9637C3.91548 17.1747 4.20163 17.2932 4.5 17.2932H13.5C13.7984 17.2932 14.0845 17.1747 14.2955 16.9637C14.5065 16.7527 14.625 16.4666 14.625 16.1682V4.91818H15.75V3.79318H2.25ZM4.5 16.1682V4.91818H13.5V16.1682H4.5ZM6.75 1.54318H11.25V2.66818H6.75V1.54318Z" fill="#373B56" /></svg>
                        <span>Eliminar</span>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </Container>
            </section>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3" className={style.BuyCoinsLateral}>
            <section className={style.BuyCoinsButtons}>
              Añadir nuevo Método de pago
            </section>
            <section id={style.CreditsData}>
              <h5>Créditos disponibles</h5>
              <span>1 credito</span>
            </section>
            <section className={style.BuyCoinsButtons}>
              Comprar créditos
            </section>
            <section id={style.HistoralBilling}>
              <HistoralBilling />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuyCoins;
