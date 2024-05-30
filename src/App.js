import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import About from "./components/About";
import Products from "./components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Products/:categoryName" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
