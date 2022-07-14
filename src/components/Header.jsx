import { Nav, Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Weather App with ReactJs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Navbar.Text>
                Powered by: <a href="https://russianwarship.rip/" rel="noreferrer" target="_blank">RussianWarship.rip</a> API
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
