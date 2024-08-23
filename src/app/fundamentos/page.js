import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";

export default function Fundamentos() {
  return (
    <>
      <Container>
      <Cabecalho titulo="Fundamentos" sub="base 0.1" />
        <Alert>Atenção! Preste muita atenção.</Alert>
        <h1>Fundamentos</h1>
        <p>Sucesso</p>
        <Link href="/">Página Fundamentos</Link> <></>
      </Container>
    </>
  );
} 