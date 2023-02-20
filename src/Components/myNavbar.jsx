import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/icon.png";
import "../styles.css";

const containerNav = {
  backgroundColor: "#F5F5F5",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)",
  border: "2px solid #613D2B",
};

const loginButton = {
  backgroundColor: "white",
  color: "#613D2B",
  border: "2px solid #613D2B",
  width: "100px",
};

const registerButton = {
  backgroundColor: "#613D2B",
  color: "white",
  width: "100px",
  border: "2px solid #613D2B",
};

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="container-fluid" style={containerNav} fixed="top">
        <Container bg="light">
          <Navbar.Brand href="#">
            <img src={Icon} className="img-fluid" width={"163.11px"} height={"height: 47.11px;"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Form className="d-flex gap-2">
              <Button style={loginButton}>Login</Button>
              <Button style={registerButton}>Register</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
