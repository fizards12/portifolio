import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portifolio from "./components/Portifolio/Portifolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import NavBar from "./components/Navbar/NavBar";
import { LuMailPlus } from "react-icons/lu";
import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const renderToolTip = (props) => (
  <Tooltip id="contact-tooltip" {...props}>
    Contact me
  </Tooltip>
);

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <>
      <Router>
        <Contact show={show} handleClose={handleClose} />
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={renderToolTip}
        >
          <a href="#" className="contact-me" onClick={handleShow}>
            <LuMailPlus />
          </a>
        </OverlayTrigger>
        <NavBar onShow={handleShow} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
