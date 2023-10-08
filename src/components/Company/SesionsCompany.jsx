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
            <p>En nuestra red social de artistas, las empresas encuentran un tesoro de talento creativo. Apoyamos a los artistas conectándolos con marcas apasionadas que valoran y respaldan su arte, creando colaboraciones significativas que inspiran y transforman.</p>
            <button className={style.singUpBtn} >¡Unete!</button>
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
