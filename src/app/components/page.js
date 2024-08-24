"use client";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Exposição de Carros</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Página 1</Nav.Link>
            <Nav.Link href="#">Página 2</Nav.Link>
            <Nav.Link href="#">Array</Nav.Link>
            <Nav.Link href="#">Card</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1>{props.titulo}</h1>
      </div>

      <Container>{props.children}</Container>
    </>
  );
}
