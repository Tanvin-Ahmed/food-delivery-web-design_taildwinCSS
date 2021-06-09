import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Cover from "./components/Cover/Cover";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Dropdown from "./components/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, []);
  return (
    <Router>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Cover />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
