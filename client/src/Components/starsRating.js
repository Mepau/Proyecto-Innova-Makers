import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Container } from "react-bootstrap";

const StarRating = (props) => {
  const stars = [];
  for (var i = props.rating; i > 0; i--) {
    if (i - 1 >= 0) {
      stars.push(1);
    } else if (i - 1 > -1) {
      stars.push(0);
      break;
    }
  }

  return (
    <Container>
      <br />
      <Row >
        {stars.map((value, index) => {
          if (value)
            return (
              <div key={index} class="col-1">
                <FontAwesomeIcon key={index} icon={faStar} />
              </div>
            );
          else
            return (
              <div key={index} class="col-1">
                <FontAwesomeIcon key={index} icon={faStarHalf} />
              </div>
            );
        })}
      </Row>
    </Container>
  );
};

export default StarRating;
