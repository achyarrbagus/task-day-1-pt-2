import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/icon.png";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useState } from "react";
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

function ModalRegister() {
  return <></>;
}
const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const [showL, setShowL] = useState(false);

  const handleCloseRegister = () => setShow(false);
  const handleShowRegister = () => setShow(true);
  //
  const handleCloseLogin = () => setShowL(false);
  const handleShowLogin = () => setShowL(true);
  return (
    <>
      <Navbar expand="lg" className="container-fluid" style={containerNav} fixed="top">
        <Container bg="light">
          <Navbar.Brand href="/">
            <img src={Icon} className="img-fluid" width={"163.11px"} height={"height: 47.11px;"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Form className="d-flex gap-2">
              <Button style={loginButton} onClick={() => handleShowLogin(true)}>
                Login
              </Button>
              <Button style={registerButton} onClick={() => handleShowRegister(true)}>
                Register
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        {/* register modal */}
        <Modal centered show={show} onHide={handleCloseRegister} backdrop="static" keyboard={false} className="w-100 ">
          <Modal.Header closeButton>
            <Modal.Title className="fs-2 fw-bolder">Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Control
                type="text"
                placeholder="Full Name"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Button style={{ backgroundColor: "#613D2B" }} className="w-100">
              Register
            </Button>
          </Modal.Body>

          <footer className="p-3">
            <p style={{ height: "20px" }} className="text-center">
              Already have an account ? Klik <span className="fw-bolder">Here</span>{" "}
            </p>
          </footer>
        </Modal>
        {/* end */}
        {/* login modal */}
        <Modal centered show={showL} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title className="fs-2 fw-bolder">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Button style={{ backgroundColor: "#613D2B" }} className="w-100">
              Login
            </Button>
          </Modal.Body>

          <footer className="p-3">
            <p style={{ height: "20px" }} className="text-center">
              Already have an account ? Klik <span className="fw-bolder">Here</span>{" "}
            </p>
          </footer>
        </Modal>
        {/* end */}
      </Navbar>
    </>
  );
};

export default MyNavbar;
