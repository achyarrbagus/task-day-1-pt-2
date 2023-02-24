import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import produkFor from "../assets/produk-4.png";

const AddProduct = () => {
  return (
    <Container>
      <Container className="px-5" style={{ paddingTop: "100px", height: "80vh", backgroundColor: "" }}>
        <Row height={"50%"} className="p-1 justify-content-center">
          <Col md={8} className="">
            <h1 className="fs-3">Add Product</h1>
            <Form.Group className="my-3" controlId="formBasicFullName">
              <Form.Control
                type="text"
                placeholder="Name"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicFullName">
              <Form.Control
                type="text"
                placeholder="Stock"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicFullName">
              <Form.Control
                type="text"
                placeholder="Price"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicFullName">
              <Form.Control
                type="text"
                placeholder="Description Product"
                style={{ backgroundColor: "#613D2B40", border: "solid 2px #613D2B" }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mt-3 w-50 ">
              <Form.Control type="file" className="" />
            </Form.Group>
            <Container className=" d-flex justify-content-center mt-3">
              <button
                className="d-flex justify-content-center align-items-center"
                style={{ border: "none", width: "260px", height: "40px", backgroundColor: "#613D2B", color: "white" }}
              >
                Add Product
              </button>
            </Container>
          </Col>
          <Col className="" md={4}>
            <img src={produkFor} width={"100%"} height={"auto"} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AddProduct;
