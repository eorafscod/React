import Container from "react-bootstrap/Container";
import Pagina from "./components/page";
import CustomCard from "./components/card";
import carData from "./data/carData";

export default function Home() {
  return (
    <Pagina titulo="Carros">
      <main>
        <Container className="d-flex flex-wrap justify-content-around">
          {carData.map((car, index) => (
            <CustomCard
              key={index}
              title={car.title}
              text={car.text}
              imageSrc={car.imageSrc}
              buttonText={car.buttonText}
            />
          ))}
        </Container>
      </main>
    </Pagina>
  );
}
