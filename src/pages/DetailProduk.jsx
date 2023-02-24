import { Container, Row, Col } from "react-bootstrap";
import data from "../assets/data.json";
import "../styles.css";
import { Link, useParams } from "react-router-dom";
import { ContextGlobal } from "../assets/context/Context";
import { useContext } from "react";

//

const DetailProduk = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const { kumpulanState } = useContext(ContextGlobal);
  const { state, setState } = kumpulanState;

  const addChart = () => {
    setState(state + 1);
    console.log(state);
  };

  return (
    <Container>
      <Row style={{ marginTop: "150px", height: "70vh" }} className="justify-content-center d-flex gap-2">
        <Col md={4}>
          <img src={`/img/${data[id].photo}`} className="img-fluid" />
        </Col>
        <Col md={6} className="py-5">
          <p className="openSans fs-1">{data[id].name}</p>
          <p className="fs-5">{data[id].stock}</p>
          <p className="fs-5">{data[id].description}</p>
          <h2 className="text-end mt-5" style={{ color: "#974A4A" }}>
            Rp. {data[id].price}
          </h2>
          <button
            style={{ width: "100%", height: "40px", borderRadius: "5px", color: "white", background: "#613D2B" }}
            className=""
            onClick={addChart}
          >
            Add Chart
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailProduk;
