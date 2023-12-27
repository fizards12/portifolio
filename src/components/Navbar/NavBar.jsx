import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { MdWebStories } from "react-icons/md";
import "./navbar.css";
import NavIcon from "./NavIcon";
import { useState } from "react";
const NavBar = () => {
  const navLinks = [
    {
      name: "Home",
      to: "/",
      Icon: FaHome,
    },
    {
      name: "About",
      to: "/about",
      Icon: FaUserAlt,
    },
    {
      name: "Resume",
      to: "/resume",
      Icon: IoDocumentSharp,
    },
    {
      name: "Portifolio",
      to: "/portifolio",
      Icon: MdWebStories,
    }
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <Navbar expand={"lg"} className={"position-fixed h-100 z-3"}>
      <Container fluid>
        <Navbar.Toggle
          className="position-absolute top-0 mt-2"
          aria-controls={`offcanvasNavbar-lg`}
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          show={show}
          style={{backgroundColor:"#ffffff80"}}
          id={`offcanvasNavbar-lg`}
          aria-labelledby={`offcanvasNavbarLabel-lg`}
          placement="start"
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body className="d-flex align-items-center">
            <Nav className={"pe-3 w-100 flex-column"}>
              {navLinks.map((l) => (
                <NavIcon
                  key={l.name}
                  className={({ isActive }) =>
                    `link ${isActive ? "active" : ""}`
                  }
                  name={l.name}
                  to={l.to}
                  Icon={l.Icon}
                  onClick={handleClose}
                ></NavIcon>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
