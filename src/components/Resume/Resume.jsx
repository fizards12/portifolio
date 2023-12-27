import { Col, Container, Row } from "react-bootstrap";
import Section from "./Section";
import "./resume.css";
import Footer from "../Footer";
import Fade from "../utilitesComponents/Fade";
import loadToPage from "../../HOC/loadToPage";
const Resume = () => {
  return (
    <>
      <Container className={"pb-4"}>
        <Fade direction="up" once={true}>
          <h2 className="pt-3 mb-5 text-center text-lg-start fw-bold">Resume</h2>
          <Row
            style={{
              border: "2px solid rgb(207 206 229)",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Col xs={12} md={6}>
              <Row>
                <Section title={"Summary"}>
                  <Col scope="heading" style={{ fontSize: "1.1rem" }} xs={12}>
                    <b>Mahmoud Sameh</b>
                  </Col>
                  <Col className="fw-bold">
                    Fresh Graduate Software Engineer practiced on developing,
                    and building responisve web applications using ReactJs
                    framework, and ExpressJs servers by NodeJs with testing and
                    deploying the production version of the application.
                  </Col>
                  <ul className="fw-bold">
                    <li>Alexandria, Egypt</li>
                    <li>+201157232513</li>
                    <li>
                      <a href="mailto:mahmoudsameh734@gmail.com">
                        mahmoudsameh734@gmail.com
                      </a>
                    </li>
                  </ul>
                </Section>
                <Section title={"Education"}>
                  <Col scope={"heading"} style={{ fontSize: "1.1rem" }} xs={12}>
                    <b>Communication & Electronics</b>
                  </Col>
                  <span className="fw-bold text-secondary">
                    Alexandria University
                  </span>
                  <div className="d-flex justify-content-between text-primary">
                    <span
                      style={{
                        backgroundColor: "#c3caed",
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      2017 - 2022
                    </span>
                    <span>
                      <i>Good</i>
                    </span>
                  </div>
                  <Col className="fw-bold">
                    <p>
                      Studying Communications between wired or wireless
                      recievers and transmitters, Electronic Transistors and
                      Diodes, Networks, Computer Architecture, and
                      Microprocessors.
                    </p>
                    <p>
                      <b>Projects</b>
                    </p>
                    <ul>
                      <li>Loud Speaker using electromagnetics waves concept</li>
                      <li>Programming GAL IC</li>
                      <li>
                        Create Communication between Atmega 328p and PC using Tx
                        Rx Pins
                      </li>
                    </ul>
                  </Col>
                </Section>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Section title={"Certificates"}>
                <Col scope="heading" xs={12} style={{ fontSize: "1.1rem" }}>
                  <b>Bachelor on Communication & Electronics</b>
                </Col>
                <Col xs={12} className="text-primary">
                  {"(10/2017 - 07/2022)"}
                </Col>
                <Col xs={12} className="text-secondary">
                  <i>Good Grade with 73.5%</i>
                </Col>
                <Col scope="heading" xs={12} style={{ fontSize: "1.1rem" }}>
                  <b>Advanced Track - Full Stack Web Development</b>
                </Col>
                <Col xs={12} className="text-primary">
                  {"(02/2022 - 05/2022)"}
                </Col>
                <Col xs={12} className="text-secondary">
                  <i>Back-end Course From Udacity</i>
                </Col>
                <Col scope="heading" xs={12} style={{ fontSize: "1.1rem" }}>
                  <b>Completion on ReactJs</b>
                </Col>
                <Col xs={12} className="text-primary">
                  {"(02/2022 - 03/2022)"}
                </Col>
                <Col scope="heading" xs={12} style={{ fontSize: "1.1rem" }}>
                  <b>Professional Track - Front-end Web Development</b>
                </Col>
                <Col xs={12} className="text-primary">
                  {"(10/2017 - 07/2022)"}
                </Col>
                <Col xs={12} className="text-secondary">
                  <i>Good Grade with 73.5%</i>
                </Col>
              </Section>
              <Section title={"Languages"}>
                <Col scope="heading" xs={12} style={{ fontSize: "1.1rem" }}>
                  <b>Arabic</b>
                </Col>
                <Col xs={12} className="text-secondary">
                  Native or Bilingual Proficiency
                </Col>
                <Col scope="heading" xs={12} style={{ fontSize: "1.1rem" }}>
                  <b>English</b>
                </Col>
                <Col xs={12} className="text-secondary">
                  Professional Working Proficiency
                </Col>
              </Section>
              <Section title={"Interests"}>
                <Col scope="heading" className="d-flex flex-wrap p-2">
                  {["Watching animes", "Online Games", "RPG Games"].map((h) => {
                    const color = "gray";
                    return (
                      <span
                        key={h}
                        style={{
                          color: color,
                          border: "1px solid " + color,
                          padding: "10px",
                          borderRadius: "3px",
                          margin: "5px",
                        }}
                      >
                        {h}
                      </span>
                    );
                  })}
                </Col>
              </Section>
            </Col>
          </Row>
        </Fade>
      </Container>
      <Footer />
    </>
  );
};

export default loadToPage(Resume);
