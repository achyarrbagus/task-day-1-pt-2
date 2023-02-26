import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function TableTransaction() {
  const data = JSON.parse(localStorage.getItem("PAYMENT"));
  return (
    <Container style={{ marginTop: "100px" }}>
      <Table>
        <thead>
          <tr style={{ backgroundColor: "#E5E5E5", color: "#000000" }}>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Post Code</th>
            <th>Product Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            console.log(item.productOrder);
            return (
              <tr>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.shippingAddress}</td>
                <td>{item.shippingPostCode}</td>
                <td>
                  {item.productOrder.map((order, index) => {
                    return order;
                  })}
                </td>
                <td>Waiting Approve</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableTransaction;
