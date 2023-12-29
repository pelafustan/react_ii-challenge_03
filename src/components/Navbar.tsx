import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/pokeball.png";

export default function PokeNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-navbar rounded">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                style={{
                  height: "3rem"
                }}
                src={Logo}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "active" : "pending"}
              >
                Home
              </NavLink>
              <NavLink
                to="/pokemon"
                className={({isActive}) => isActive ? "active" : "pending"}
              >
                Pokémon
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
