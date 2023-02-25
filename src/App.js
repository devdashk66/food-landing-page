import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./components/Error404";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/packages" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
