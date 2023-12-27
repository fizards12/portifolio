import { Col, Container, Row } from "react-bootstrap";
import face from "./assets/myFace.png";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import Fade from "../utilitesComponents/Fade.jsx";
import loadToPage from "../../HOC/loadToPage";
const Home = () => {
  return (
    <Container fluid className=" px-0">
      <Container className={"header"}>
        <Row className="align-self-center">
          <Fade
            direction="right"
            delay={1000}
            once={true}
            ParentComponent={Col}
            parentProps={{ xs: 12 }}
          >
            <TypeAnimation
              cursor={false}
              className={"header-title"}
              style={{
                color: "#45505b",
              }}
              sequence={[1000, "Mahmoud Sameh"]}
            />
            <br />
            <TypeAnimation
              cursor={false}
              className={"header-title"}
              style={{
                color: "#0563bb",
              }}
              sequence={[
                2100,
                "I'm Software Developer",
                1000,
                "I'm React Developer",
                1000,
                "I'm Back-End Developer",
              ]}
              repeat={Infinity}
            />
          </Fade>
          <Fade
            direction="left"
            delay={1000}
            once={true}
            ParentComponent={Col}
            parentProps={{ xs: 12 }}
          >
            <a
              className={"me-3"}
              href="https://www.facebook.com/mahmuod.sameh1"
            >
              <BsFacebook className="rounded-circle" />
            </a>
            <a className={"me-3"} href="https://www.github.com/fizards12">
              <BsGithub className="rounded-circle" />
            </a>
            <a href="https://www.linkedin.com/in/mahmoudsamehmohammed">
              <BsLinkedin />
            </a>
          </Fade>
        </Row>
        <Fade
          className={"face justify-self-center"}
          once={true}
          direction="right"
        >
          <img src={face} alt="mahmoud sameh" />
        </Fade>
      </Container>
    </Container>
  );
};

export default loadToPage(Home);
