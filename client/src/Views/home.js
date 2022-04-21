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
    navigate("/Devices", {state: {query, option}})
  };

  return (
      <Container fluid style={{ alignItems: "center", alignContent: "center" }}>
        <Row className="justify-content-md-center" style={{ paddingTop: 20 }}>
          <Col xs={8}>
            <LandingCarousel />
          </Col>
        </Row>
        <Row style={{ padding: 20 }}>
          <Container
            className="justify-content-md-center"
            style={{
              background:
                "radial-gradient(circle, rgba(148,187,233,1) 31%, rgba(174,174,238,0.34775908654477417) 100%)",
            }}
          >
            <h1 style={{ color: "whitesmoke", fontFamily: "Open Sans" }}>
              Quienes somos?
            </h1>
            <p style={{ color: "whitesmoke", fontFamily: "Open Sans" }}>
              Somos
            </p>
          </Container>
        </Row>
        <Row style={{ background: "white" }}>
          <h1> Directorio de proveedores</h1>
          <Col xs={2}>
            <p>Busca los dispositivos</p>
          </Col>
          <Col>
            <QueryForm handles={{handleQuery, handleSubmit, handleRadios}}/>
          </Col>
        </Row>
      </Container>
    );
};

export default Home;
