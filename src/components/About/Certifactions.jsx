import advanced from "./assets/Advanced.PNG";
import professional from "./assets/Professional.PNG";
import bachelor from "./assets/Bachelor.jpg";
import { Col, Row } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import Fade from "../utilitesComponents/Fade";

const Certifactions = ({ handleShow }) => {
  return (
    <Row className="mb-5">
      <Fade
        once={true}
        direction="up"
        ParentComponent={Row}
      >
        <h2
          style={{ fontSize: "1.8rem" }}
          className="mb-4 text-center text-lg-start fw-bold"
        >
          CERTIFICATES
        </h2>
        <Row>
          <Row scope="cert-card" className="rounded p-2">
            <Col scope="cert-img" xs={12} md={4} lg={3}>
              <img className="w-100" src={advanced} alt="professional" />
            </Col>
            <Col className="d-flex flex-column justify-content-between py-1">
              <div className="d-flex">
                <h4 className="me-2">Front-end Web Development Professional</h4>
                <a href="#" onClick={handleShow(professional)}>
                  <FaLink />
                </a>
              </div>
              <div>
                <b>Introduced By: </b> Udacity
              </div>
            </Col>
          </Row>
          <Row scope="cert-card" className="rounded p-2">
            <Col scope="cert-img" xs={12} md={4} lg={3}>
              <img className="w-100" src={professional} alt="professional" />
            </Col>
            <Col className="d-flex flex-column justify-content-between py-1">
              <div className="d-flex">
                <h4 className="me-2">Full-Stack Web Development Advanced</h4>
                <a href="#" onClick={handleShow(advanced)}>
                  <FaLink />
                </a>
              </div>
              <div>
                <b>Introduced By: </b> Udacity
              </div>
            </Col>
          </Row>
          <Row scope="cert-card" className="rounded p-2">
            <Col scope="cert-img" xs={12} md={4} lg={3}>
              <img className="w-100" src={bachelor} alt="professional" />
            </Col>
            <Col className="d-flex flex-column justify-content-between py-1">
              <div className="d-flex">
                <h4 className="me-2">
                  Bachelor on Communications & Electronics
                </h4>
                <a href="#" onClick={handleShow(bachelor)}>
                  <FaLink />
                </a>
              </div>
              <div>
                <b>Introduced By: </b> Alexandria University
              </div>
            </Col>
          </Row>
        </Row>
      </Fade>
    </Row>
  );
};

export default Certifactions;
