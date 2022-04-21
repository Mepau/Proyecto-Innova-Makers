import {useState, useEffect} from "react";
import Thumbnail from "../Components/thumbnail";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import NewIdeaModal from "../Components/newIdeaModal";



const UserView = (props) => {

    const [submitted, setSubmitted] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
    
      axios.get("/").then((res) => {
        setData(JSON.parse(res.data))
      });
    }, [submitted]);
  
    return (
      <Container fluid>
        <Row>
          <Col xs={8}>
            <Row>
              
            </Row>
            <Row>
              <h2 style={{color: "whitesmoke"}}>Dispositivos</h2>
            </Row>
            {data.map((obj, idx) => {
              if(obj.business === "InnoMakers")
              return (
                <Row>
                  <Thumbnail key={idx} data={obj} disabled={true} />
                </Row>
              );
            })}
          </Col>
          <Col>
          <NewIdeaModal submitted={submitted} setSubmitted={setSubmitted}/>
          </Col>
        </Row>
      </Container>
    );
  }

  
  export default UserView;