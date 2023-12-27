import { Container } from "react-bootstrap";
import "./about.css";
import { useState } from "react";
import CertModal from "./CertModal";
import Info from "./Info";
import Certifactions from "./Certifactions";
import Skills from "./Skills";
import Footer from "../Footer";
import Fade from "../utilitesComponents/Fade";
import loadToPage from "../../HOC/loadToPage.jsx";
const About = () => {
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (photoToShow) => (e) => {
    e.preventDefault();
    setShow(true);
    setPhoto(photoToShow);
  };
  return (
    <>
      <Container className={"about" + " py-3"}>
        <Fade direction="up" once={true}>
          <div>
            <CertModal photo={photo} show={show} onHide={handleClose} />
            <Info />
            <Certifactions handleShow={handleShow} />
            <Skills />
          </div>
        </Fade>
      </Container>
      <Footer />
    </>
  );
};

export default loadToPage(About);
