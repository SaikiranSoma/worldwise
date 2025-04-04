import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePAge from "./pages/HomePAge";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePAge />} />
        <Route path="product" element={<Products />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
