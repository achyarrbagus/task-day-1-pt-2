import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/icon.png";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import IsLoginNav from "./IsLoginNav";
import AdminNav from "./AdminNav";
import { useNavigate } from "react-router-dom";
//
import { ContextGlobal } from "../assets/context/Context";
import { useContext } from "react";

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
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showL, setShowL] = useState(false);
  const [islogin, setLogin] = useState(false);
  const [adminlogin, setAdminLogin] = useState(false);
  const { kumpulanState } = useContext(ContextGlobal);
  const { userState, setUserState, userData, setUserData } = kumpulanState;
  const [inputLogin, setInputLogin] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const handleDiretToAdmin = () => {
    navigate("/admin");
  };

  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserState({ ...userState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //
  const handleLoginChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputLogin({ ...inputLogin, [name]: value });
    console.log(value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const found = userData.find((user) => user.email === inputLogin.email && user.password === inputLogin.password);
    const admin = userData.find(
      (user) => user.email === inputLogin.email && user.password === inputLogin.password && user.role === "admin"
    );
    if (admin) {
      setAdminLogin(true);
      handleDiretToAdmin();
    } else if (found) {
      setLogin(true);
    } else {
      console.log("password not macth");
    }
  };
  console.log(adminlogin);

  //

  const handleCloseRegister = () => setShow(false);
  const handleShowRegister = () => setShow(true);
  //
  const handleCloseLogin = () => setShowL(false);
  const handleShowLogin = () => setShowL(true);
  //
  const TriggerBtnL = () => {
    setShowL(true);
    setShow(false);
  };
  //
  const TriggerBtnR = () => {
    setShowL(false);
    setShow(true);
  };

  if (adminlogin === true) {
    return (
      <>
        <AdminNav />;
      </>
    );
  } else if (islogin === true) {
    return (
      <>
        <IsLoginNav />;
      </>
    );
  } else {
    return (
      <>
        <Navbar expand="lg" className="container-fluid" style={containerNav} fixed="top">
          <Container bg="light">
            <Link to={"/"}>
              <Navbar.Brand>
                <img src={Icon} className="img-fluid" width={"163.11px"} height={"height: 47.11px;"} />
              </Navbar.Brand>
            </Link>
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
              <Form onSubmit={handleSubmit}>
                <div className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userState.email}
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
                  />
                </div>
                <div className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userState.password}
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
                  />
                </div>
                <div className="mb-3" controlId="formBasicFullName">
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={userState.fullname}
                    placeholder="Full Name"
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
                  />
                </div>
                <Button type="submit" style={{ backgroundColor: "#613D2B" }} className="w-100">
                  Register
                </Button>
              </Form>
            </Modal.Body>

            <footer className="p-3">
              <p style={{ height: "20px" }} className="text-center">
                Already have an account ? Klik{" "}
                <span className="fw-bolder">
                  {" "}
                  <button onClick={TriggerBtnL} style={{ background: "none" }}>
                    Here
                  </button>
                </span>{" "}
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
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    onChange={handleLoginChange}
                    placeholder="Email"
                    style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    value={inputLogin.password}
                    onChange={handleLoginChange}
                    type="password"
                    placeholder="Password"
                    style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
                  />
                </Form.Group>
                <Button type="submit" style={{ backgroundColor: "#613D2B" }} className="w-100">
                  Login
                </Button>
              </Form>
            </Modal.Body>

            <footer className="p-3">
              <p style={{ height: "20px" }} className="text-center">
                Already have an account ? Klik{" "}
                <span className="fw-bolder">
                  <button onClick={TriggerBtnR} style={{ background: "none" }}>
                    Here
                  </button>
                </span>{" "}
              </p>
            </footer>
          </Modal>
          {/* end */}
        </Navbar>
      </>
    );
  }
};

export default MyNavbar;
