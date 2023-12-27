import { Col, Container } from "react-bootstrap";
import { FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container className="py-4 d-flex flex-column align-items-center">
        <h1>Mahmoud Sameh</h1>
        <Col className="d-flex">
          <a href="https://www.facebook.com/mahmoud.sameh1">
            <FaFacebookF className="rounded-circle" />
          </a>
          <a href="https://www.github.com/fizards12">
            <FaGithubAlt className="rounded-circle" />
          </a>
          <a href="https://www.linkedin.com/in/mahmoudsamehmohammed">
            <FaLinkedinIn />
          </a>
        </Col>
        <Col>© Copyright <b>Portifolio</b>. All Rights Reserved</Col>
        <Col>Design by <b>Mahmoud Sameh</b></Col>
      </Container>
    </footer>
  );
};

export default Footer;
