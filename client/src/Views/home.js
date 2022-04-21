import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import LandingCarousel from "../Components/carouselLandingPage";
import QueryForm from "../Components/queryForm";

const Home = (props) => {


  const [query, setQuery] = useState("");
  const [option, setOption] = useState("Todos");

  const navigate = useNavigate();

  const handleRadios = (event) => {
    setOption(event.target.value);
  };

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/Devices", { state: { query, option } })
  };

  return (
    <Container fluid style={{ alignItems: "center", alignContent: "center" }}>
      <Row className="justify-content-md-center" style={{ paddingTop: 20 }}>
        <Col xs={8}>
          <LandingCarousel />
        </Col>
      </Row>
      <Row style={{ padding: 20 }}>
        <Container className="justify-content-md-center" >
          <h1 style={{ color: "whitesmoke", fontFamily: "Open Sans" }}>Quienes somos?</h1>
          <h5 style={{ color: "whitesmoke", fontFamily: "Open Sans" }}>
            Somos una empresa encargada de facilitar la vida a las personas con discapacidad, evitando los procesos burocraticos y permitiendo que los que necesiten pueden decir que les hace falta.
          </h5>
          <h5 style={{ color: "whitesmoke", fontFamily: "Open Sans" }}>
            Nuestro proposito es combinar todas las empresas y/o instituciones que desarrollen dispositivos o protesis para facilitar su presentacion y exposicion a todo el mundo.
          </h5>
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
          <Col>
            <QueryForm handles={{ handleQuery, handleSubmit, handleRadios }} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
