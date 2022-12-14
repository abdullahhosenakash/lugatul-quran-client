import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          আল-কুরআনের অভিধান
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-2 text-muted">
            N.B. The dictionary is under construction
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              href="https://github.com/abdullahhosenakash/lugatul-quran-server"
              target="_blank"
              rel="noreferrer"
            >
              API
            </Nav.Link>
            {user ? (
              <div className="d-flex flex-column flex-lg-row">
                <Nav.Link as={Link} to="/admin">
                  {user.displayName}
                </Nav.Link>
                <button
                  className="bg-dark text-muted border-0"
                  onClick={() => signOut(auth)}
                >
                  LogOut
                </button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
