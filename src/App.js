import LandingPage from "./pages/LandingPage";
import DetailProduk from "./pages/DetailProduk";
import ChartProduk from "./pages/ChartProduk";
import AdminDhsbord from "./pages/AdminDhsbord";
import AddProduct from "./pages/AddProduct";
import ListProduk from "./pages/ListProduk";
import DetailTransaction from "./pages/DetailTransaction";
import EditProduct from "./pages/EditProduct";
import { ContextProvider } from "./assets/context/Context";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

//
import SharedLayout from "./Components/SharedLayout";

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="/detail-product/:id" element={<DetailProduk />} />
              <Route path="/chart-product" element={<ChartProduk />} />
              <Route path="/admin" element={<AdminDhsbord />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/list-product" element={<ListProduk />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
              <Route path="/detail-transaction" element={<DetailTransaction />} />
            </Route>
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
