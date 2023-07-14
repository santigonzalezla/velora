import style from './ArtistApp.module.css'
import { Col, Row, Container } from 'react-bootstrap';
import SideBarArtist from './SideBarArtist';

const ArtistApp = () => {
  return (
    <div>
      <SideBarArtist />
    </div>
  );
}

export default ArtistApp;
