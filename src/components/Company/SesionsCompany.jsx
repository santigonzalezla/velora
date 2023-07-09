import { Container, Col, Row } from 'react-bootstrap';
import style from './Company.module.css'
import SecionsImg from '../../assets/img/Company/SessionsCompany.png'

const SesionsCompany = () => {
  return (
    <div>
      <Container>
        <Row id={style.Sesions}>
          <Col sm="12" md="6" lg="6" xl="6">
            <h1>Sección explicativa </h1>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
            <button className={style.singUpBtn} >Sing up</button>
          </Col>
          <Col sm="12" md="6" lg="6" xl="6">
            <img src={SecionsImg} alt="" id={style.ImgHero} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SesionsCompany;
