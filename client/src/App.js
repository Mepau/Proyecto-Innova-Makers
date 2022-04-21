
import { Container } from "react-bootstrap"
import Nav from "./Nav/Nav";
import axios from 'axios';
import { BrowserRouter } from "react-router-dom"

axios.defaults.baseURL = "http://localhost:3000"

function App() {
  return (
    <Container fluid style={{ background: "linear-gradient(90deg, rgba(2,0,117,1) 0%, rgba(71,0,101,1) 50%, rgba(0,170,205,1) 100%)" }} >
      <Nav />

    </Container>
  );
}

export default App;
