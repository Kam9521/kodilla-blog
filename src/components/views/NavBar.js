import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <Navbar.Brand className="ms-3">Blog.app</Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link
          as={NavLink}
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/post/add"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Add post
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/categories"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Categories
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
