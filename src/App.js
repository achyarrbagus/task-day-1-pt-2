import LandingPage from "./pages/LandingPage";
import DetailProduk from "./pages/DetailProduk";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail-produk" element={<DetailProduk />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
