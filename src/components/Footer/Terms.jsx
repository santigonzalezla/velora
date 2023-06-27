import style from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header'
import Footer from './Footer'

const Terms = () => {
  return (
    <>
      <div id={style.Terms}>
        <Header />
        <Container id={style.TermsContainer}>
          <section id={style.TermsHeader}>
            <h1>Terms of Service</h1>
          </section>
          <section className={style.TermsContent}>
            <Row>
              <Col xs='2' sm='2' md='2'>
                <section className={style.TermsNav}>
                  <p>Privacy Police</p>
                  <p>Terms Of Use</p>
                  <p>Plataforma to Business Regulation Terms</p>
                  <p>Categoría</p>
                </section>
              </Col>
              <Col xs='10' sm='10' md='10'>
                <section className={style.TermsTxt}>
                  <h6>Privacy Police</h6>
                  <p>
                    In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl
                    Diam quis enim lobortis scelerisque fermentum ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </section>
                <section className={style.TermsTxt}>
                  <h6>Privacy Police</h6>
                  <p>
                    In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl
                    Diam quis enim lobortis scelerisque fermentum ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </section>
                <section className={style.TermsTxt}>
                  <h6>Privacy Police</h6>
                  <p>
                    In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl
                    Diam quis enim lobortis scelerisque fermentum ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </section>
                <section className={style.TermsTxt}>
                  <h6>Privacy Police</h6>
                  <p>
                    In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl
                    Diam quis enim lobortis scelerisque fermentum ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </section>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
