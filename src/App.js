import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Services from "./Component/Services";

import "./Style/App.scss";
import "./Style/Header.scss";
import "./Style/Home.scss";
import "./Style/Footer.scss";
import "./Style/Contact.scss";
import "./Style/Services.scss";
import "./Style/mediaquary.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
