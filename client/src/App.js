import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Nav/mainNav"
import {Container } from "react-bootstrap"

function App() {
  return (
    <Container fluid style ={{background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(0,24,236,1) 100%)"}}>
      <Nav/>
      
    </Container>
  );
}

export default App;
