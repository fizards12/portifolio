import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import face from "./assets/face.jpg";
const Info = () => {
  return (
    <Row className="mb-5">
      <Row className="text-center mb-4">
        <h2
          style={{ fontSize: "1.8rem" }}
          className="mt-5 mb-4 text-center text-lg-start fw-bold"
        >
          ABOUT
        </h2>

        <Col xs={12}>
          My Name is Mahmoud Sameh. I am Communication and Electronics Engineer
          and fresh Full-Stack Web Developer. I graduated from Communication and
          Electronics department, and I finished Reactjs Course that on
          MaharaTech, the three courses of Web Development track introduced by
          FWD, and finished Codevolution playlists of React, React Hooks, and
          React Router.
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="p-2 d-flex" xs={11} lg={4}>
          <img src={face} className="w-100" alt="mahmoud sameh" />
        </Col>
        <Col className={"my-3"} lg={8} xs={12}>
          <Col className="py-2 text-center text-lg-start" xs={12}>
            <h2>Software Engineer & Web Developer</h2>
          </Col>
          <Row scope="table">
            <Col className="py-3 p-2" scope="col" xs={12} lg={5}>
              <b>Age: </b>24
            </Col>
            <Col className="py-3 p-2" scope="col" xs={12} lg={7}>
              <b>LinkedIn: </b>
              <a href="https://www.linkedin.com/mahmoudsamehmohammed">
                mahmoudsamehmohammed
              </a>
            </Col>
            <Col className="py-3 p-2" scope="col" xs={12} lg={5}>
              <b>Degree: </b> Bachelor
            </Col>
            <Col className="py-3 p-2" scope="col" xs={12} lg={7}>
              <b>Department: </b>Communication & Electronics
            </Col>
            <Col className="py-3 p-2" scope="col" xs={12} lg={5}>
              <b>Phone: </b>+201157232513
            </Col>
            <Col className="py-3 p-2" scope="col" xs={12} lg={7}>
              <b>Email: </b>
              <Link to={"/contact"}>mahmoudsameh734@gmail.com</Link>
            </Col>
            <Col className="py-3 p-2" scope="col" xs={12} lg={5}>
              <b>City: </b>Alexandria, Egypt
            </Col>
            <Col className="py-3 p-2" scope="col" xs={12} lg={7}>
              <b>Freelance: </b>Available
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Info;
