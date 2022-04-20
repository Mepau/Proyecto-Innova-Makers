import { Link } from "react-router-dom"
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import LandingCarousel from "../Components/carouselLandingPage";

const Home = (props) => {


  const handleSubmit = (event) => {
    console.log(event)
  }

  return (
    <Container fluid style={{ alignItems: "center", alignContent: "center" }}>
      <Row className="justify-content-md-center" style={{ paddingTop: 20 }}>
        <Col xs = {8}>
          <LandingCarousel />
        </Col>
      </Row>
      <Row style={{ padding: 20 }}>
        <Container className="justify-content-md-center" style={{ background: "radial-gradient(circle, rgba(148,187,233,1) 31%, rgba(174,174,238,0.34775908654477417) 100%)" }}>
          <h1 style={{ color: "whitesmoke", fontFamily: "Open Sans" }}>Quienes somos?</h1>
          <p style={{ color: "whitesmoke", fontFamily: "Open Sans" }}>
            Somos
          </p>
        </Container>
      </Row>
      <Row style={{ background: "white" }}>
        <h1> Directorio de proveedores</h1>
        <Col xs={2}>
          <p>
            Busca los dispositivos
          </p>
        </Col>
        <Col>
          <Form>
            <Form.Check
              inline
              type="radio"
              value="Todos"
              label="Todos"
              name="selection"
            >
            </Form.Check>
            <Form.Check
              type="radio"
              inline
              value="Amputacion"
              label="Por amputacion"
              name="selection"
            >
            </Form.Check>

            <Form.Check
              type="radio"
              inline
              value="Funcionalidad"
              label="Por funcionalidad"
              name="selection"
            ></Form.Check>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Busca un dispositivo</Form.Label>
              <Form.Control type="text" placeholder="Realiza tu busqueda aqui" />
            </Form.Group>
            <Button type="button" onClick={handleSubmit}>Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
