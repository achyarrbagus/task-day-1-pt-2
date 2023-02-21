import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/icon.png";
import SpBucket from "../assets/ShoopingBucket.png";
import Profil from "../assets/Killua.jpg";
import "../styles.css";
//
import produkOne from "../assets/produk-1.png";

const DetailProduk = () => {
  return (
    <Container>
      <Col>
        <Navbar expand="lg" style={{ background: "#F5F5F5", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)" }}>
          <Container>
            <Navbar.Brand href="/">
              <img src={Icon} width={"150px"} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
              <Form className="d-flex gap-5">
                <Button variant="">
                  <img src={SpBucket} color={"613D2B"} width={"40px"} />
                </Button>
                <Button variant="">
                  <img src={Profil} width={"50px"} style={{ borderRadius: "50%" }} />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
      <Row style={{ marginTop: "50px", height: "70vh" }} className="justify-content-center d-flex gap-2">
        <Col md={4}>
          <img src={produkOne} className="img-fluid" />
        </Col>
        <Col md={6} className="py-5">
          <p className="openSans fs-1">Titte</p>
          <p className="fs-5">stock : 500</p>
          <p className="fs-5">
            GUETEMALA Beans Stock : 500 Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia,
            meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian
            selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru
            mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.
          </p>
          <h2 className="text-end mt-5" style={{ color: "#974A4A" }}>
            Rp.300.900
          </h2>
          <button
            style={{ width: "100%", height: "40px", borderRadius: "5px", color: "white", background: "#613D2B" }}
            className=""
          >
            Add Chart
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailProduk;
