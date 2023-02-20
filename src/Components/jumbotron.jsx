import { Row, Col, Container, Form } from "react-bootstrap";
import Icon from "../assets/icon-2.png";
import IconTri from "../assets/icon-3.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//
import produkOne from "../assets/produk-1.png";
import produkTwo from "../assets/produk-2.png";
import produkTri from "../assets/produk-3.png";
import produkFor from "../assets/produk-4.png";
import waves from "../assets/Waves.png";

const jContainer = {
  marginTop: "100px",
  position: "relative",
};

const rowBg = {
  padding: "50px",
  backgroundColor: "#DBB699",
  height: "450px",
  margin: "auto",
};

const imgRight = {
  position: "absolute",
  top: "30px",
  right: "-110px",
  width: "470px",
};

const colContainer = {
  marginTop: "50px",
  position: "relative",
};

const produk = {
  marginTop: "100px",
};

const cardColor = {
  backgroundColor: "#F7E6DA",
};
const waveStyle = {
  marginRight: "60px",
  marginTop: "50px",
};

function Jumbotron() {
  return (
    <Container style={jContainer} className={"w-75"}>
      <Row>
        <Col style={colContainer}>
          <div style={rowBg} className={""}>
            <img src={Icon} width="450px" />
            <h5 className="openSans fs-3">BEST QUALITY COFFEE BEANS</h5>
            <p>Quality freshly roasted coffee made just for you. Pour, brew and enjoy</p>
            <div className="d-flex justify-content-end " style={waveStyle}>
              <img src={waves} />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <img src={IconTri} width="400px" style={imgRight} />
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between" style={produk}>
        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={produkOne} />
            <Card.Body style={cardColor}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>Rp.299.900</p>
                <p>Stock : 99</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={produkTwo} />
            <Card.Body style={cardColor}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>Rp.299.900</p>
                <p>Stock : 99</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={produkTri} />
            <Card.Body style={cardColor}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>Rp.299.900</p>
                <p>Stock : 99</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={produkFor} />
            <Card.Body style={cardColor}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>Rp.299.900</p>
                <p>Stock : 99</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Jumbotron;
