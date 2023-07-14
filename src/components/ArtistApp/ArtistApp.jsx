import style from './ArtistApp.module.css'
import { Col, Row, Container } from 'react-bootstrap';
import SideBarArtist from './SideBarArtist';
import FeedArtist from './FeedArtist'
import SuggetionsArtist from './SuggetionsArtist';

const ArtistApp = () => {
  return (
    <div id={style.ArtistApp}>
      <SideBarArtist />
      <Container id={style.ContentArtistApp} fluid>
        <Row>
          <Col xs="12" sm="8" md="8" lg="8">
            <FeedArtist />
          </Col>
          <Col xs="12" sm="4" md="4" lg="4">
            <SuggetionsArtist />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArtistApp;
