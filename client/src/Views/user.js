import {useState, useEffect} from "react";
import Thumbnail from "../Components/thumbnail";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import NewIdeaModal from "../Components/newIdeaModal";



const UserView = (props) => {

    const [data, setData] = useState([]) 

    useEffect(() => {
    
      axios.get("/").then((res) => {
        setData(JSON.parse(res.data));
      });
    }, []);
  
  
    return (
      <Container fluid>
        <Row>
          <Col xs={2} style={{ backgroundColor: "lightgrey", height: 200 }}>
            <h1>Sidebar</h1>
          </Col>
          <Col>
            <Row>
              
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
          <Col>
          <NewIdeaModal/>
          </Col>
        </Row>
      </Container>
    );
  }

  
  export default UserView;