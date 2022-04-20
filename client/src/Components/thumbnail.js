import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./starsRating";
import { Container, Row, Col, Image } from "react-bootstrap";

const Thumbnail = (props) => {
  const { description, img, rating, amputationTags, functionalityTags } =
    props.data;

  return (
    <Container style={{ padding: 10 }}>
      <Row fluid>
        <Col xs={4}>
          <Image thumbnail class="img-thumbnail" src={img} />
        </Col>
        <Col>
          <Row fluid>
            <h3>{description}</h3>
          </Row>
          <Row>
            <StarRating rating={rating} />
          </Row>
          <Row>
            <Col xs={4}>
              <h5>Amputation Tags:</h5>
            </Col>
            <Col>
              <Row>
                {amputationTags.map((tag) => {
                  return (
                    <Col xs={2}>
                      <p>{tag}</p>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h5>Functionality Tags:</h5>
            </Col>
            <Col>
              <Row>
                {functionalityTags.map((tag) => {
                  return (
                    <Col xs={2}>
                      <p>{tag}</p>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Col>

        {props.disabled ? null : (
          <Col>
            <div class="btn-group-vertical">
              <button type="button" class="btn btn-secondary">
                <FontAwesomeIcon icon={faPenToSquare} />
                Editar
              </button>
              <button type="button" class="btn btn-secondary">
                <FontAwesomeIcon icon={faTrashCan} />
                Borrar
              </button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Thumbnail;
