import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import produkOne from "../assets/produk-1.png";
import sampah from "../assets/Sampah.png";
import { useState } from "react";
import Order from "../assets/order.json";

const ChartProduk = () => {
  const [value, setValue] = useState(
    Order.map((item) => ({
      ...item,
      originalPrice: item.price,
    }))
  );

  const totalPrice =
    value != null &&
    value.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

  const totalQuantity =
    value != null &&
    value.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

  console.log(value);

  return (
    <Container>
      <Row className="justify-content-center" style={{ marginTop: "100px" }}>
        <Col className="fs-3">My Chart</Col>
      </Row>
      <br />
      <Row>
        <Col>
          <p className="fs-5">Review Your Order</p>
        </Col>
      </Row>
      <Row>
        {value.map((item, index) => {
          const incrment = () => {
            const updateChart = [...value];
            updateChart[index].price += updateChart[index].price;
            updateChart[index].quantity += 1;
            setValue(updateChart);
          };
          const dcrement = () => {
            const updateChart = [...value];
            updateChart[index].quantity = Math.max(1, item.quantity - 1);
            updateChart[index].price = updateChart[index].originalPrice * updateChart[index].quantity;
            setValue(updateChart);
          };

          return (
            <Col md={7}>
              <div style={{ height: "1px", width: "100%", backgroundColor: "#613D2B" }}></div>
              <div className="p-3 d-flex justify-content-between gap-3">
                <div>
                  <img src={produkOne} width="70px" />
                </div>
                <div>
                  <div>
                    <h1 className="fs-4">{item.name}</h1>
                  </div>
                  <div className="d-flex gap-2" style={{}}>
                    <button className="fs-5" style={{ border: "none" }} onClick={incrment}>
                      +
                    </button>
                    <h3 className="fs-5 p-1 " style={{ backgroundColor: "#F6E6DA" }}>
                      {item.quantity}
                    </h3>
                    <button className="fs-5" style={{ border: "none" }} onClick={dcrement}>
                      -
                    </button>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h5>Rp.{item.price}</h5>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <button className="" style={{ border: "none", backgroundColor: "rgba(255,255,255,0.5)" }}>
                      <img src={sampah} />
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ height: "1px", width: "100%", backgroundColor: "#613D2B" }}></div>
            </Col>
          );
        })}
        <Col md={5} className="p-3">
          <div style={{ height: "1px", width: "100%", backgroundColor: "#613D2B" }}></div>
          <div className="d-flex justify-content-between py-3">
            <div>
              <div>
                <p>SubTotal</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div>
              <div>
                <p>{totalQuantity}</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
          <div style={{ height: "1px", width: "100%", backgroundColor: "#613D2B" }}></div>
          <div className="d-flex justify-content-between mt-3">
            <div>
              <p>total</p>
            </div>
            <div>
              <p>{totalPrice}</p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link to={"/detail-transaction"}>
              <button style={{ backgroundColor: "#613D2B", width: "300px", color: "white", borderRadius: "5px" }}>Pay</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChartProduk;
