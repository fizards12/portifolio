import { Col, Container } from "react-bootstrap";
import Footer from "../Footer";
import Project from "./Project";
import autonetReact from "./assets/Automated_React.PNG";
import autonetXampp from "./assets/Automated_Php.PNG";
import landing from "./assets/landing.PNG";
import weathApp from "./assets/weather_app.PNG";
import nodePhoto from "./assets/node.png";
import "./projects.css";
import Fade from "../utilitesComponents/Fade";
import loadToPage from "../../HOC/loadToPage";
const Portifolio = () => {
  return (
    <>
      <Fade once={true} direction="up" className="p-2 pt-5" ParentComponent={Container}>
          <h2 className="mb-5 text-center text-lg-start fw-bold">Portifolio</h2>
          <Project
            animationType={"left"}
            className="justify-content-center"
          >
            <Project.Header className="order-1">
              <h3>Automation Network Configuration using ReactJs</h3>
              <Col>
                <p className="text-primary">{"(11/2022-03/2023)"}</p>
              </Col>
            </Project.Header>
            <Col className="order-3 order-md-2">
              <Project.List className="d-flex list-unstyled flex-wrap">
                {["React", "Redux", "React-Router","Bootstrap","Bootstrap-React"].map((s) => (
                  <Project.SkillItem key={s} className="m-1">
                    {s}
                  </Project.SkillItem>
                ))}
              </Project.List>
              <Project.List>
                <Project.ListItem>
                  Rebuilding the Front-end side of the Graduation Project using
                  React framework and React-Redux library.
                </Project.ListItem>
                <Project.ListItem>No Back-End</Project.ListItem>
                <Project.ListItem>
                  Link:{" "}
                  <a href="https://main--autonet.netlify.app/auth/login">
                    https://main--autonet.netlify.app/auth/login
                  </a>
                </Project.ListItem>
              </Project.List>
            </Col>
            <Project.Image
              className="m-md-0 m-auto py-3 py-md-0 order-2 order-md-3"
              src={autonetReact}
            />
          </Project>
          <Project
            animationType={"right"}
            className="justify-content-center"
          >
            <Project.Header className="order-1">
              <h3>Automation Network Configuration using XAMPP</h3>
              <Col>
                <p className="text-primary">{"(10/2021-04/2022)"}</p>
              </Col>
            </Project.Header>
            <Col className="order-3 order-md-2">
              <Project.List className="d-flex list-unstyled flex-wrap">
                {["GNS3", "XAMPP", "PHP", "MariaDB","Python"].map((s) => (
                  <Project.SkillItem key={s} className="m-1">
                    {s}
                  </Project.SkillItem>
                ))}
              </Project.List>
              <Project.List>
                <Project.ListItem>
                  GNS3 is a simulator used to build a virtual network.
                </Project.ListItem>
                <Project.ListItem>
                  The virtual network{`'`}s devices can be configurated
                  automatically using python scripts.
                </Project.ListItem>
                <Project.ListItem>
                  A friendly web appplication is built to facilitate the
                  automtion with just a simple form.
                </Project.ListItem>
                <Project.ListItem>
                  Link:{" "}
                  <a href="https://drive.google.com/drive/folders/1nWI3i16Jjn2faM8KisqjJNPLB4RO3Wob?usp=drive_link">
                    Google Drive Folder
                  </a>
                </Project.ListItem>
              </Project.List>
            </Col>
            <Project.Image
              className="m-md-0 m-auto py-3 py-md-0 order-2 order-md-3"
              src={autonetXampp}
            />
          </Project>
          <Project
            animationType={"left"}
            className="justify-content-center"
          >
            <Project.Header className="order-1">
              <h3>Landing Page</h3>
              <Col>
                <p className="text-primary">{"(08/2021-09/2021)"}</p>
              </Col>
            </Project.Header>
            <Col className="order-3 order-md-2">
              <Project.List className="d-flex list-unstyled flex-wrap">
                {["HTML", "CSS", "JavaScript"].map((s) => (
                  <Project.SkillItem key={s} className="m-1">
                    {s}
                  </Project.SkillItem>
                ))}
              </Project.List>
              <Project.List>
                <Project.ListItem>
                  A website with ability to navigate to site sections using the
                  navigation bar at the top.
                </Project.ListItem>
                <Project.ListItem>
                  Link:{" "}
                  <a href="https://fizards12.github.io/landing-page">
                    https://fizards12.github.io/landing-page
                  </a>
                </Project.ListItem>
              </Project.List>
            </Col>
            <Project.Image
              className="m-md-0 m-auto py-3 py-md-0 order-2 order-md-3"
              src={landing}
            />
          </Project>
          <Project
            animationType={"right"}
            className="justify-content-center"
          >
            <Project.Header className="order-1">
              <h3>Weather App</h3>
              <Col>
                <p className="text-primary">{"(08/2021-09/2021)"}</p>
              </Col>
            </Project.Header>
            <Col className="order-3 order-md-2">
              <Project.List className="d-flex list-unstyled flex-wrap">
                {["JavaScript", "NodeJs", "Express", "API"].map((s) => (
                  <Project.SkillItem key={s} className="m-1">
                    {s}
                  </Project.SkillItem>
                ))}
              </Project.List>
              <Project.List>
                <Project.ListItem>
                  Create a Server to the html and css weather app to communicate
                  with prebuilt weather api {`"openwheathermap"`} using GET http
                  request and update the dom with the data collected from
                  communication.
                </Project.ListItem>
                <Project.ListItem>
                  Link:{" "}
                  <a href="https://weather-app-96rp.onrender.com">
                    https://weather-app-96rp.onrender.com
                  </a>
                </Project.ListItem>
              </Project.List>
            </Col>
            <Project.Image
              className="m-md-0 m-auto py-3 py-md-0 order-2 order-md-3"
              src={weathApp}
            />
          </Project>
          <Project
            animationType={"left"}
            className="justify-content-center"
          >
            <Project.Header className="order-1">
              <h3>Products Store</h3>
              <Col>
                <p className="text-primary">{"(11/2022-03/2023)"}</p>
              </Col>
            </Project.Header>
            <Col className="order-3 order-md-2">
              <Project.List className="d-flex list-unstyled flex-wrap">
                {[
                  "NodeJs",
                  "ExpressJs",
                  "RESTful APIs",
                  "PostgreSQL",
                  "JWT",
                ].map((s) => (
                  <Project.SkillItem key={s} className="m-1">
                    {s}
                  </Project.SkillItem>
                ))}
              </Project.List>
              <Project.List>
                <Project.ListItem>
                  Create the Server side of online store to provide RESTful APIs
                  to communicate with the store database.
                </Project.ListItem>
                <Project.ListItem>
                  authentication and authorization are provided also using JWT
                  library.
                </Project.ListItem>
                <Project.ListItem>
                  Unit tests and endpoint tests are applied on this project too.
                </Project.ListItem>
                <Project.ListItem>
                  Link:{" "}
                  <a href="https://github.com/fizards12/backendStore.git">
                    https://github.com/fizards12/backendStore.git
                  </a>
                </Project.ListItem>
              </Project.List>
            </Col>
            <Project.Image
              className="m-md-0 m-auto py-3 py-md-0 order-2 order-md-3"
              src={nodePhoto}
            />
          </Project>
        
      </Fade>
      <Footer />
    </>
  );
};

export default loadToPage(Portifolio);
