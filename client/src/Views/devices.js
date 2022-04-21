import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Thumbnail from "../Components/thumbnail";
import { Container, Row, Col } from "react-bootstrap";
import QueryForm from "../Components/queryForm";

const data = [
  {
    description: "Protesis de mano electronica",
    img: "https://biotechmagazineandnews.com/wp-content/uploads/2019/09/protesis-mano.jpg",
    business: "Interbionic",
    rating: 4,
    amputationTags: ["mano", "mano izquierda"],
    functionalityTags: ["Funcionalidad limitada"],
  },
  {
    description: "Protesis dental",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGJ9g_1Lhnd191fMr32QzIZWIsaFJVvALiA&usqp=CAU",
    rating: 2.5,
    business: "Hospital Dontologico",
    amputationTags: ["Dientes", "Removivle parcialmente"],
    functionalityTags: ["Completa funcionalidad"],
  },
];

const DevicesView = (props) => {
  const { state } = useLocation();
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
    navigate("/Devices", { state: { query, option } });
  };

  const regexp = new RegExp(query, "i");

  console.log(state);

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
          {data
            .filter((device, index) => {
              if (state.option === "Todos") {
                if (state.query === "") return device;
                if (
                  device.description
                    .toLowerCase()
                    .includes(state.query.toLowerCase()) ||
                  device.functionalityTags.find((element) => {
                    if (element.includes(state.query.toLowerCase()))
                      return true;
                  }) ||
                  device.amputationTags.find((element) => {
                    if (element.includes(state.query.toLowerCase()))
                      return true;
                  })
                )
                  return device;
              } else if (state.option === "Funcionalidad") {
                if (state.query === "") return device;
                else if (
                  device.description
                    .toLowerCase()
                    .includes(state.query.toLowerCase()) ||
                  device.functionalityTags.find((element) => {
                    if (element.includes(state.query.toLowerCase()))
                      return true;
                  })
                )
                  return device;
              } else if (state.option === "Amputacion") {
                if (state.query === "") return device;
                else if (
                  device.description
                    .toLowerCase()
                    .includes(state.query.toLowerCase()) ||
                  device.amputationTags.find((element) => {
                    if (element.includes(state.query.toLowerCase()))
                      return true;
                  })
                )
                  return device;
              }
            })
            .map((obj, idx) => {
              return (
                <Row>
                  <Thumbnail key={idx} data={obj} disabled={true} />
                </Row>
              );
            })}
          {
            //data.map((element, index) => {
            // return (
            //   <Row>
            //     <Thumbnail key={index} data={element} disabled={true} />
            //   </Row>
            // );
          }
        </Col>
      </Row>
    </Container>
  );
};

export default DevicesView;
