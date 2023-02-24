import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function TableTransaction() {
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
          <tr>
            <td>1</td>
            <td>Sugeng No Pants</td>
            <td>Cileungsi</td>
            <td>16820</td>
            <td>RWANDA Beans</td>
            <td>Waiting Approve</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Haris Gams</td>
            <td>Serang</td>
            <td>42111</td>
            <td>ETHIOPIA Beans</td>
            <td>Success</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aziz Union</td>
            <td>Bekasi</td>
            <td>13450</td>
            <td>GUETEMALA Beans</td>
            <td>Cancel</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Haris Gams</td>
            <td>Serang</td>
            <td>21331</td>
            <td>Tanjung Balai</td>
            <td>On The Way</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default TableTransaction;
