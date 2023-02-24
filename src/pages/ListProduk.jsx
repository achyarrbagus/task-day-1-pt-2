import { Container, Table, Button } from "react-bootstrap";
import AdminNav from "../Components/AdminNav";

function ListProduk() {
  return (
    <Container style={{ marginTop: "200PX" }}>
      <Table className="mt-5">
        <thead>
          <tr style={{ backgroundColor: "#E5E5E5", color: "#000000" }}>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td>Cileungsi</td>
            <td>16</td>
            <td>150000</td>
            <td></td>
            <td className="d-flex gap-1">
              <Button className="btn-success">Delete</Button>
              <Button className="btn-danger">Update</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td>Serang</td>
            <td>42</td>
            <td>143000</td>
            <td></td>
            <td className="d-flex gap-1">
              <Button className="btn-success">Delete</Button>
              <Button className="btn-danger">Update</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td>Bekasi</td>
            <td>13</td>
            <td>130000</td>
            <td></td>
            <td className="d-flex gap-1">
              <Button className="btn-success">Delete</Button>
              <Button className="btn-danger">Update</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td>Serang</td>
            <td>21</td>
            <td>120000</td>
            <td></td>
            <td className="d-flex gap-1">
              <Button className="btn-success">Delete</Button>
              <Button className="btn-danger">Update</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ListProduk;
