import FacilitatorNav from "../Nav/facilitatorNav";
import Thumbnail from "../Components/thumbnail";
import NewIdeaModal from "../Components/newIdeaModal";
import { Container, Row, Col } from "react-bootstrap";

const data = [
  {
    description: "Protesis de mano electronica",
    img: "https://biotechmagazineandnews.com/wp-content/uploads/2019/09/protesis-mano.jpg",
    rating: 4,
    amputationTags: ["hand", "left hand"],
    functionalityTags: ["Full Functionality"],
  },
  {
    description: "Protesis dental",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGJ9g_1Lhnd191fMr32QzIZWIsaFJVvALiA&usqp=CAU",
    rating: 2.5,
    amputationTags: ["Teeth", "Partial removable"],
    functionalityTags: ["Full Functionality"],
  },
];

const DevicesView = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={2} style={{ backgroundColor: "lightgrey", height: 200 }}>
          <h1>Sidebar</h1>
        </Col>
        <Col>
          <Row>
            <h2>Dispositivos</h2>
          </Row>

          {data.map((element, index) => {
            return (
              <Row fluid>
                <Thumbnail key={index} data={element} disabled={true} />
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default DevicesView;
