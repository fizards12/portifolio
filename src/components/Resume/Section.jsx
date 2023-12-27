import { Col, Row } from "react-bootstrap";

const Section = ({ title, children }) => {
  return (
    <Col xs={12} className="mb-4">
      <h3 className="fw-bold">{title}</h3>
      <Row scope="sec-body">{children}</Row>
    </Col>
  );
};

export default Section;
