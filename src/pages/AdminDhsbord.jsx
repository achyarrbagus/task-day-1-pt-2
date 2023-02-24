import AdminNav from "../Components/AdminNav";
import { Container, Row } from "react-bootstrap";
import TableTransaction from "../Components/TableTransaction";
const AdminDhsbord = () => {
  return (
    <Container>
      <AdminNav />
      <TableTransaction />
    </Container>
  );
};

export default AdminDhsbord;
