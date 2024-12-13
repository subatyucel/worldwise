import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Homepage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
