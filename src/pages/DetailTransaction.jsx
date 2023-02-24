import { Container, Row, Col } from "react-bootstrap";
import Profil from "../assets/Killua.jpg";
import Icon from "../assets/icon.png";
import ProductOne from "../assets/produk-1.png";
import Qr from "../assets/qr.png";

const DetailTransaction = () => {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row style={{ padding: "50px", height: "60vh" }}>
        <Col className="">
          <div>
            <h3 className="fs-3">My Profil</h3>
          </div>
          <div className="d-flex gap-5">
            <div className="mt-2">
              <img src={Profil} />
            </div>
            <div>
              <div className="my-3">
                <h5>Full Name</h5>
                <h5>Radif Ganteng</h5>
              </div>
              <div className="my-3">
                <h5>Email</h5>
                <h5>radifgans@gmail.com</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col className="">
          <div>
            <h3 className="fs-3">My Transaction</h3>
          </div>
          <div className="d-flex">
            <div className="mt-2">
              <Row className="p-4 mt-2" style={{ backgroundColor: "#F6E6DA" }}>
                <Container className="d-flex gap-5 justify-content-betwen">
                  <div className="d-flex gap-2">
                    <div>
                      <img className="img-fluid" src={ProductOne} style={{ height: "180px", width: "170px" }} />
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <div>
                        <p className="fs-5 m-0">Title Product</p>
                        <p className="m-0">Saturday, 5 March 2020</p>
                      </div>
                      <div>
                        <p className="mt-2 mb-0">Price : Rp.250.900</p>
                        <p className="m-0">Qty : 2</p>
                        <p>Sub Total : 500.800</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={Icon} style={{ width: "120px" }} />
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      <img src={Qr} />
                    </div>
                    <div className="mt-3" style={{ backgroundColor: "#613D2B" }}>
                      <p className="p-2" style={{ color: "white" }}>
                        Waiting Approve
                      </p>
                    </div>
                  </div>
                </Container>
              </Row>
              <Row className="p-4 mt-2" style={{ backgroundColor: "#F6E6DA" }}>
                <Container className="d-flex gap-5 justify-content-betwen">
                  <div className="d-flex gap-2">
                    <div>
                      <img className="img-fluid" src={ProductOne} style={{ height: "180px", width: "170px" }} />
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <div>
                        <p className="fs-5 m-0">Title Product</p>
                        <p className="m-0">Saturday, 5 March 2020</p>
                      </div>
                      <div>
                        <p className="mt-2 mb-0">Price : Rp.250.900</p>
                        <p className="m-0">Qty : 2</p>
                        <p>Sub Total : 500.800</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={Icon} style={{ width: "120px" }} />
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      <img src={Qr} />
                    </div>
                    <div className="mt-3">
                      <p
                        style={{ background: " linear-gradient(180deg, #00FF19 0%, #8FFF00 100%)", color: "#78A85A" }}
                        className="p-2"
                      >
                        Waiting Approve
                      </p>
                    </div>
                  </div>
                </Container>
              </Row>
              <Row className="p-4 mt-2" style={{ backgroundColor: "#F6E6DA" }}>
                <Container className="d-flex gap-5 justify-content-betwen">
                  <div className="d-flex gap-2">
                    <div>
                      <img className="img-fluid" src={ProductOne} style={{ height: "180px", width: "170px" }} />
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <div>
                        <p className="fs-5 m-0">Title Product</p>
                        <p className="m-0">Saturday, 5 March 2020</p>
                      </div>
                      <div>
                        <p className="mt-2 mb-0">Price : Rp.250.900</p>
                        <p className="m-0">Qty : 2</p>
                        <p>Sub Total : 500.800</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={Icon} style={{ width: "120px" }} />
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      <img src={Qr} />
                    </div>
                    <div className="mt-3">
                      <p
                        style={{ background: " linear-gradient(180deg, #FF9900 0%, #FF9900 100%)", color: "white" }}
                        className="p-2"
                      >
                        Waiting Approve
                      </p>
                    </div>
                  </div>
                </Container>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailTransaction;
