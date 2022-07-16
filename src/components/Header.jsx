import { Nav, Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar style={{background: 'transparent', color: 'white'}} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Weather App with ReactJs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Navbar.Text color="white">
                Powered by: <a href="https://openweathermap.org/api" rel="noreferrer" target="_blank">openweathermap.org</a> API
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
