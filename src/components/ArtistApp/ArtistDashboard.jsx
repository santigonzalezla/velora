import style from './ArtistApp.module.css'
import { Image, Row, Col, Container } from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import SideBarArtist from './SideBarArtist';
const ArtistDashboard = () => {
  return (
    <div id={style.ViewArtist}>
      <SideBarArtist />
      <Container id={style.ArtistDashboard} fluid>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" id={style.ViewArtistContent}>
            <section className={style.Head}>
              <h3>Dashboard</h3>
              <Image src={Logo} id={style.LogoDashboard} fluid />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArtistDashboard;
