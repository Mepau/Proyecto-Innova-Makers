import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Thumbnail from "../Components/thumbnail";
import { Container, Row, Col } from "react-bootstrap";
import QueryForm from "../Components/queryForm";
import axios from "axios";

const Devices= (props) => {
  const { state } = useLocation();
  const { query = "" } = state || "";
  const { option = "Todos" } = state || "Todos";
  const [queryed, setQuery] = useState("");
  const [optioned, setOption] = useState("Todos");
  const [data, setData] = useState([]);
  const [load, handleLoad] = useState(false);
  const navigate = useNavigate();

  const handleRadios = (event) => {
    setOption(event.target.value);
  };

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/Devices", { state: { query: queryed, option: optioned } });
    handleLoad(!load);

  };

  useEffect(() => {
    let params = {
      params: {
        query,
        option,
      },
    };
    axios.get("/", params).then((res) => {
      setData(JSON.parse(res.data));
    });
  }, [load]);

  console.log(query, option);

  return (
    <Container fluid>
      <Row>
        <Col xs={2} style={{ backgroundColor: "lightgrey", height: 200 }}>
          <h1>Sidebar</h1>
        </Col>
        <Col>
          <Row>
            <QueryForm handles={{ handleSubmit, handleRadios, handleQuery }} />
          </Row>
          <Row>
            <h2>Dispositivos</h2>
          </Row>
          {data.map((obj, idx) => {
            return (
              <Row>
                <Thumbnail key={idx} data={obj} disabled={true} />
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Devices;
