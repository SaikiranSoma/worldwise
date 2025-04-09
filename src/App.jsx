import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePAge from "./pages/HomePAge";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
const url = "http://localhost:5000/cities";
function App() {
  const [_cities, setCities] = useState({});
  const [_loading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was a problem while fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePAge />} />
        <Route path="product" element={<Products />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList  _cities={_cities}  _loading={_loading} />} />
          <Route path="cities" element={<CityList _cities={_cities}  _loading={_loading}/>} />
          <Route path="countries" element={<CountryList  _cities={_cities}  _loading={_loading} />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
