"use client";

import Pagina from "../components/Pagina";

export default function Array() {
  const carros = ["corsa", "Celta", "Ferrari", "Fusca", "Cobalt"];

  return (
    <Pagina titulo="Página de array">
      {carros.map((item) => (
        <p>{item}</p>
      ))}

      <ul>
        {carros.map((item) => (
          <p>{item}</p>
        ))}
      </ul>
    </Pagina>
  );
}