import style from './ArtistApp.module.css'
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import {Col, Row, Container} from 'react-bootstrap';
import ArtistUserStory from './ArtistUserStory';
import ArtistChatStory from './ArtistChatStory';

const ArtistChats = () => {
    return (
        <div id={style.Chats}>
            <SideBarArtist/>
            <Container fluid className={style.ChatsContainer}>
                <Row>
                    <Col className={style.ChatsBar} xs='2' sm='3' md='3'>
                        <ArtistUserStory/>
                    </Col>
                    <Col xs='10' sm='9' md='9' className={style.UserChat}>
                        <ArtistChatStory/>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default ArtistChats;
