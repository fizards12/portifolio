import { Col, Row } from "react-bootstrap";
import Fade from "../utilitesComponents/Fade";

/* eslint-disable react/display-name */
const Project = ({
  delay = 0,
  animationType = "right",
  className = "",
  style = {},
  children = "",
}) => {
  return (
    <>
      <div
        style={{
          width: "80%",
          height: "1px",
          backgroundColor: "#aab0bf",
          margin: "20px auto",
        }}
      ></div>
      <Row
        className={className + " mb-5 p-2 proj overflow-hidden"}
        style={style}
      >
        <Fade direction={animationType} delay={delay} once={true}>
          {children}
        </Fade>
      </Row>
    </>
  );
};

Project.Image = ({
  imgClass = "",
  className = "",
  style = {},
  imgStyle = {},
  src,
  alt = "",
}) => {
  return (
    <Col xs={12} sm={8} md={6} lg={5} className={className} style={style}>
      <img
        className={imgClass + " w-100"}
        style={imgStyle}
        src={src}
        alt={alt}
      />
    </Col>
  );
};

Project.Header = ({ className = "", style = {}, children = "" }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

Project.List = ({ className = "", style = {}, children = "" }) => {
  return (
    <ul className={className} style={style}>
      {children}
    </ul>
  );
};
Project.ListItem = ({ children = "", className = "", style = {} }) => (
  <li className={className} style={style}>
    {children}
  </li>
);

Project.SkillItem = ({ children = "", className = "", style = {} }) => (
  <Project.ListItem
    className={className}
    style={{
      ...style,
      backgroundColor: "#c3caed",
      padding: "5px",
      fontSize: "12px",
    }}
  >
    {children}
  </Project.ListItem>
);

export default Project;
