import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Nav, Navbar, Image } from "react-bootstrap";
import logo from "./logo.png";
import "./menu.css";

function Menu() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={logo} alt="logo" style={{ maxHeight: "40px" }} />
          Lawork®
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Início</Nav.Link>
            <Nav.Link href="#">Mesa Virtual</Nav.Link>
            <Nav.Link href="#action2">Novo Documento</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Procurar"
              className="me-2"
              aria-label="search"
            />
            <Button variant="success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
