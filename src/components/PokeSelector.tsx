import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import usePoke from "../hooks/usePoke";
import { Outlet, useNavigate } from "react-router-dom";

export default function PokeSelector({ className }: { className?: string }) {
  const { pokeList } = usePoke();
  const navigate = useNavigate();
  return (
    <Container className={className}>
      <Form.Select
        aria-label="pokemon"
        onChange={(event) => {
          console.log(event.currentTarget.value);
          navigate(`/pokemon/${event.currentTarget.value}`)
        }}
        defaultValue={"def"}
      >
        <option
          value="def"
          disabled
        >
          Choose a Pokémon
        </option>
        {
          pokeList.map((entry, index) => (
            <option
              key={index}
              value={entry.name}
            >
              {entry.name.charAt(0).toUpperCase() + entry.name.slice(1)}
            </option>
          ))
        }
      </Form.Select>
      <Outlet />
    </Container>
  );
}
