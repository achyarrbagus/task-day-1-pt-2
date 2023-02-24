import { Row, Col, Container, Form } from "react-bootstrap";
import Icon from "../assets/icon-2.png";
import IconTri from "../assets/icon-3.png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import data from "../assets/data.json";
//
import waves from "../assets/Waves.png";

const jContainer = {
  width: "1100px",
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
  right: "-100px",
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
    <Container style={jContainer}>
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
        {data.map((item, index) => (
          <Col md={2}>
            <Link to={`/detail-product/${index}`} style={{ textDecoration: "none", color: "black" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`/img/${item.photo}`} />
                <Card.Body style={cardColor}>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <p>{item.price}</p>
                    <p>{item.stock}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Jumbotron;
