import {Card, Container, Row, Col} from 'react-bootstrap';
import style from './Company.module.css'
import ServicesImg1 from "../../assets/img/Company/companyservice1.png";
import ServicesImg2 from '../../assets/img/Company/companyservice2.png';
import ServicesImg3 from '../../assets/img/Company/companyservice3.png';
import BeImg from "../../assets/img/Company/companybenefit.png";

const ServicesCompany = () =>
{
    return (
        <div>
            <Container id={style.Services}>
                <Row className={style.TopServiceRow}>
                    <Col xs='12' md='6' lg='6' xl="5" className={style.TopServiceRowCol}>
                        <img src={BeImg} alt="" id={style.ImgBe} className={style.topImg}/>
                    </Col>
                    <Col xs='12' md='6' lg='6' xl="7" className={style.TopServiceRowCol}>
                        <h1>Conexión con artistas top</h1>
                        <p>
                            Fomentamos alianzas estratégicas con creadores de renombre en Velora Room para potenciar el
                            alcance y la relevancia de tu marca.
                        </p>
                        <div className={style.TopServiceRowCard}>
                            <Card className={style.ServiceCardsTop}>
                                <Card.Body className={style.ServiceCardTopBody}>
                                    <svg width="95" height="95" viewBox="0 0 95 95" fill="none">
                                        <path d="M60.0855 40.3616L42.4085 28.5769C42.1866 28.4289 41.9287 28.3439 41.6623 28.331C41.3958 28.318 41.1309 28.3777 40.8957 28.5036C40.6605 28.6295 40.464 28.8169 40.327 29.0458C40.19 29.2747 40.1177 29.5365 40.1179 29.8033V53.3726C40.1176 53.6393 40.1897 53.9011 40.3265 54.1301C40.4634 54.359 40.6599 54.5465 40.8949 54.6726C41.1302 54.7986 41.3953 54.8583 41.6619 54.8453C41.9285 54.8323 42.1866 54.7472 42.4085 54.5989L60.0855 42.8143C60.2876 42.6798 60.4533 42.4975 60.5679 42.2835C60.6825 42.0696 60.7425 41.8306 60.7425 41.5879C60.7425 41.3452 60.6825 41.1063 60.5679 40.8923C60.4533 40.6784 60.2876 40.496 60.0855 40.3616ZM43.064 50.6216V32.5542L56.6127 41.5879L43.064 50.6216ZM79.8911 16.5455H15.0755C13.9034 16.5455 12.7794 17.0111 11.9506 17.8399C11.1218 18.6687 10.6562 19.7927 10.6562 20.9648V62.2111C10.6562 63.3831 11.1218 64.5072 11.9506 65.3359C12.7794 66.1647 13.9034 66.6303 15.0755 66.6303H79.8911C81.0631 66.6303 82.1872 66.1647 83.016 65.3359C83.8447 64.5072 84.3103 63.3831 84.3103 62.2111V20.9648C84.3103 19.7927 83.8447 18.6687 83.016 17.8399C82.1872 17.0111 81.0631 16.5455 79.8911 16.5455ZM81.3642 62.2111C81.3642 62.6017 81.209 62.9764 80.9327 63.2527C80.6565 63.5289 80.2818 63.6841 79.8911 63.6841H15.0755C14.6848 63.6841 14.3101 63.5289 14.0339 63.2527C13.7576 62.9764 13.6024 62.6017 13.6024 62.2111V20.9648C13.6024 20.5741 13.7576 20.1994 14.0339 19.9232C14.3101 19.6469 14.6848 19.4917 15.0755 19.4917H79.8911C80.2818 19.4917 80.6565 19.6469 80.9327 19.9232C81.209 20.1994 81.3642 20.5741 81.3642 20.9648V62.2111ZM84.3103 76.9419C84.3103 77.3326 84.1551 77.7073 83.8789 77.9835C83.6026 78.2598 83.2279 78.415 82.8373 78.415H12.1293C11.7386 78.415 11.364 78.2598 11.0877 77.9835C10.8114 77.7073 10.6562 77.3326 10.6562 76.9419C10.6562 76.5512 10.8114 76.1765 11.0877 75.9003C11.364 75.624 11.7386 75.4688 12.1293 75.4688H82.8373C83.2279 75.4688 83.6026 75.624 83.8789 75.9003C84.1551 76.1765 84.3103 76.5512 84.3103 76.9419Z" fill="#373B56"/>
                                    </svg>
                                    <Card.Text className={style.ServiceCardsText}>
                                        Contenido Digital
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={style.ServiceCardsTop}>
                                <Card.Body className={style.ServiceCardTopBody}>
                                    <svg width="93" height="93" viewBox="0 0 93 93" fill="none">
                                        <path d="M42.1517 78.528C42.0718 78.8376 41.8911 79.1118 41.6381 79.3074C41.3852 79.503 41.0743 79.6089 40.7546 79.6083C40.6332 79.6088 40.5123 79.5943 40.3945 79.5651L28.8717 76.6844C28.7114 76.6447 28.5592 76.5777 28.4216 76.4864L19.7795 70.725C19.6221 70.62 19.4868 70.485 19.3815 70.3278C19.2762 70.1705 19.2029 69.9941 19.1658 69.8085C19.1287 69.6229 19.1285 69.4319 19.1652 69.2462C19.2019 69.0606 19.2749 68.884 19.3798 68.7265C19.5919 68.4085 19.9215 68.1877 20.2963 68.1127C20.4819 68.0756 20.6729 68.0754 20.8586 68.1122C21.0443 68.1489 21.2209 68.2218 21.3783 68.3268L29.8115 73.9513L41.1146 76.7708C41.2983 76.8178 41.4708 76.9006 41.6224 77.0144C41.774 77.1283 41.9016 77.2709 41.998 77.4341C42.0943 77.5974 42.1575 77.778 42.1839 77.9658C42.2103 78.1535 42.1993 78.3446 42.1517 78.528ZM89.9603 43.6897C89.7834 44.228 89.5013 44.7258 89.1305 45.1541C88.7596 45.5825 88.3073 45.9329 87.7998 46.1851L79.0641 50.5565L59.0649 70.5557C58.8871 70.7284 58.6678 70.8523 58.428 70.9154C58.1883 70.9785 57.9364 70.9786 57.6966 70.9158L34.6511 65.1544C34.4745 65.1117 34.3081 65.0346 34.1614 64.9276L14.083 50.5997L5.23925 46.1743C4.73159 45.9206 4.27887 45.5694 3.90694 45.1408C3.53502 44.7121 3.25117 44.2144 3.07161 43.6761C2.89204 43.1377 2.82029 42.5693 2.86044 42.0032C2.90058 41.4371 3.05185 40.8845 3.30559 40.3769L12.2501 22.4878C12.5038 21.9801 12.855 21.5274 13.2836 21.1554C13.7122 20.7835 14.21 20.4997 14.7483 20.3201C15.2867 20.1405 15.8551 20.0688 16.4212 20.1089C16.9873 20.1491 17.5399 20.3003 18.0475 20.5541L26.4951 24.7779L46.1198 19.1678C46.379 19.0958 46.6529 19.0958 46.912 19.1678L66.5367 24.7779L74.9844 20.5541C75.492 20.3003 76.0446 20.1491 76.6107 20.1089C77.1768 20.0688 77.7452 20.1405 78.2836 20.3201C78.8219 20.4997 79.3196 20.7835 79.7483 21.1554C80.1769 21.5274 80.5281 21.9801 80.7817 22.4878L89.7263 40.3805C89.9818 40.8873 90.1341 41.4399 90.1743 42.0062C90.2145 42.5724 90.1417 43.141 89.9603 43.6789V43.6897ZM6.52476 43.5996L14.1838 47.4274L24.4174 26.96L16.762 23.1323C16.593 23.0474 16.4088 22.9967 16.2202 22.9829C16.0315 22.9692 15.842 22.9927 15.6624 23.0523C15.4829 23.1118 15.3168 23.2061 15.1737 23.3298C15.0306 23.4535 14.9132 23.6042 14.8284 23.7733L5.88381 41.666C5.79891 41.835 5.74815 42.0191 5.73441 42.2078C5.72068 42.3965 5.74424 42.586 5.80376 42.7656C5.86328 42.9451 5.95759 43.1112 6.0813 43.2543C6.20501 43.3974 6.3557 43.5148 6.52476 43.5996ZM70.2816 55.2412L58.1179 45.4973C51.4455 51.5323 42.7134 52.5226 35.5549 47.9495C35.0079 47.6027 34.5459 47.1374 34.2029 46.5879C33.86 46.0385 33.645 45.419 33.5738 44.7752C33.5026 44.1315 33.577 43.48 33.7915 42.8688C34.006 42.2577 34.3552 41.7027 34.8131 41.2447L51.2691 25.282C51.5391 25.0199 51.901 24.8738 52.2773 24.8751H56.3967L46.5159 22.0521L27.3558 27.5254L16.6684 48.9037L35.6089 62.4322L57.5958 67.9307L70.2816 55.2412ZM76.4463 49.0766L65.7914 27.7558H52.8607L36.8404 43.2972C36.6912 43.4467 36.5778 43.628 36.5086 43.8275C36.4394 44.0271 36.4162 44.2397 36.4407 44.4494C36.4637 44.6679 36.5355 44.8784 36.6508 45.0654C36.7661 45.2524 36.922 45.4111 37.1069 45.5297C42.1301 48.7381 49.998 49.6491 57.0161 42.577C57.2667 42.3248 57.6018 42.1743 57.9568 42.1544C58.3118 42.1344 58.6616 42.2465 58.9389 42.469L72.3377 53.1996L76.4463 49.0766ZM87.1445 41.666L78.2035 23.7733C78.1187 23.6042 78.0013 23.4535 77.8582 23.3298C77.7151 23.2061 77.549 23.1118 77.3695 23.0523C77.1899 22.9927 77.0004 22.9692 76.8117 22.9829C76.623 22.9967 76.4389 23.0474 76.2699 23.1323L68.6144 26.96L78.8481 47.4274L86.5071 43.5996C86.6762 43.5148 86.8269 43.3974 86.9506 43.2543C87.0743 43.1112 87.1686 42.9451 87.2281 42.7656C87.2876 42.586 87.3112 42.3965 87.2975 42.2078C87.2837 42.0191 87.233 41.835 87.1481 41.666H87.1445Z" fill="#373B56"/>
                                    </svg>
                                    <Card.Text className={style.ServiceCardsText}>
                                        Contrátame
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <button>Ver planes de pago</button>
                    </Col>
                </Row>
                <h1>Promueve tu establecimiento</h1>
                <Row className={style.ServiceRow}>
                    <Col xs='12' md='3' lg='4' className={style.CardCol}>
                        <Card className={style.ServiceCards}>
                            <Card.Body className={style.ServiceCardBody}>
                                <Card.Title className={style.ServCardTxt}>Estrategias de contenido especiales</Card.Title>
                                <Card.Text className={style.ServiceCardsText}>
                                    Nos encargamos de diseñar estrategias de
                                    contenido efectivas y originales que promuevan tu mensaje o servicios.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ServicesImg1}/>
                        </Card>
                    </Col>
                    <Col xs='12' md='3' lg='4' className={style.CardCol}>
                        <Card className={style.ServiceCards}>
                            <Card.Body className={style.ServiceCardBody}>
                                <Card.Title className={style.ServCardTxt}>Campañas virales</Card.Title>
                                <Card.Text className={style.ServiceCardsText}>
                                    Diseñamos campañas virales que se adaptan a tu público, garantizando que tu mensaje
                                    se propague ampliamente y que la participación de éste aumente.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ServicesImg2}/>
                        </Card>
                    </Col>
                    <Col xs='12' md='3' lg='4' className={style.CardCol}>
                        <Card className={style.ServiceCards}>
                            <Card.Body className={style.ServiceCardBody}>
                                <Card.Title className={style.ServCardTxt}>Analítica avanzada</Card.Title>
                                <Card.Text className={style.ServiceCardsText}>
                                    Conseguirán estadísticas en tiempo real para medir detalladamente
                                    e impulsar todas tus acciones en la plataforma.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img className={style.ServiceCardsImg} variant="bottom" src={ServicesImg3}/>
                        </Card>
                    </Col>
                </Row>
                <Row className={style.ServiceRowBottom}>
                    <button>Ver planes de pago</button>
                </Row>
            </Container>
        </div>
    );
}

export default ServicesCompany;
