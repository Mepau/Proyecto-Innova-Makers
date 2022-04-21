
import {Container } from "react-bootstrap"
import Nav from "./Nav/Nav";
import axios from 'axios';
import {BrowserRouter} from "react-router-dom"

axios.defaults.baseURL = "http://localhost:3000"

function App() {
  return (
    <Container fluid >
      <Nav/>
      
    </Container>
  );
}

export default App;
