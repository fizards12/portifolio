// import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { Col } from "react-bootstrap";
const Skill = ({visible,style, name, value }) => {
    const barStyle = !visible ? {...style} : {...style, width: value + "%"}
  return (
    <Col xs={12} md={6}>
      <div className="px-2">
        <b>{name}</b>
      </div>
      <div scope={"skill-bar"}>
      <div style={barStyle}></div>
      </div>
    </Col>
  );
};

export default Skill;
