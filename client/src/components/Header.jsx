import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/components/HeaderStyle.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">POWOW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/chatOptions">Chat</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <NavDropdown title="Chat" id="collasible-nav-dropdown">
              <NavDropdown.Item href="chatOptions">Public Chat</NavDropdown.Item>
              <NavDropdown.Item href="#joinRoom">
                Join Room
              </NavDropdown.Item>
              <NavDropdown.Item href="createRoom">Create Room</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
