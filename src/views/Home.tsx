import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { PokeApi } from "../utils/types";

export default function Home() {
  const data = useLoaderData() as PokeApi;
  return (
    <Container fluid>
      <h1 className="mt-4">PokéWeb</h1>
      <h2 className="mt-3">Welcome, dear trainer!</h2>
      <p className="mt-3">This is a web Pokédex, and will allow you to gather some relevant information from certain Pokémon.</p>
      <p className="mt-3">Glad to see you here! take care and use this space freely.</p>
      <Container className="mt-4">
        <img
          src={data.sprites.other["official-artwork"].front_default}
          style={{
            width: "50%",
          }}
        />
      </Container>
    </Container>
  );
}
