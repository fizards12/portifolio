import { Row } from "react-bootstrap";
import Skill from "./Skill";
import { useEffect, useRef, useState } from "react";
import Fade from "../utilitesComponents/Fade";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const [inViewRef, inView] = useInView({
    rootMargin: "0% 0% -35% 0%",
    triggerOnce: true,
  });
  const ref = useRef(null);
  const skills = [
    {
      name: "HTML5",
      value: 80,
    },
    {
      name: "CSS3",
      value: 80,
    },
    {
      name: "JavaScript",
      value: 90,
    },
    {
      name: "NodeJs",
      value: 70,
    },
    {
      name: "ReactJs",
      value: 70,
    },
    {
      name: "Bootstrap",
      value: 80,
    },
    {
      name: "Bootstrap React",
      value: 60,
    },
    {
      name: "JQuery",
      value: 50,
    },
    {
      name: "JQuery UI",
      value: 50,
    },
    {
      name: "Express",
      value: 50,
    },
    {
      name: "MongoDB",
      value: 40,
    },
    {
      name: "PostgreSQL",
      value: 50,
    },
    {
      name: "APIs",
      value: 70,
    },
    {
      name: "RESTful APIs",
      value: 70,
    },
    {
      name: "JsonWebToken",
      value: 25,
    },
    {
      name: "Jest",
      value: 25,
    },
  ];
  const [visible, setVisible] = useState(false);
  const style = {
    transition: "width 0.8s ease-in-out",
    backgroundColor: "#2760ef",
    width: "1px",
    height: "100%",
    borderRadius: "5px",
  };

  useEffect(() => {
    setVisible(inView)
  }, [inView]);
  return (
    <Row
      ref={(el) => {
        inViewRef(el);
        if (ref) {
          if (typeof ref === "function") {
            ref(el);
          } else if (Object.prototype.hasOwnProperty.call(ref, "current")) {
            ref.current = el;
          }
        }
      }}
      id="skills"
      className="pb-5 justify-content-center"
    >
      <Fade direction="up" once={true}>
        <h2
          style={{ fontSize: "1.8rem" }}
          className="mb-3 text-center text-lg-start fw-bold"
        >
          SKILLS
        </h2>
        <Row className="justify-content-center p-2">
          {skills.map(({ name, value }) => (
            <Skill
              style={style}
              visible={visible}
              key={name}
              name={name}
              value={value}
            />
          ))}
        </Row>
      </Fade>
    </Row>
  );
};

export default Skills;
