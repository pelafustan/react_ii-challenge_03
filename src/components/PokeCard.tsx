import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { PokeApi } from "../utils/types";
import { useParams } from "react-router-dom";

export default function PokeCard({ pokeApi }: { pokeApi: PokeApi }) {
  const params = useParams();
  if (pokeApi) {
    return (
      <>
        <Container className="mt-4 p-3">
          <h1>
            {
              params.name
                ? params.name.charAt(0).toUpperCase() + params.name.slice(1)
                : null
            }
          </h1>
          <Row className="mt-4">
            <Col>
              <img
                style={{ width: "60%" }}
                src={pokeApi.sprites.other["official-artwork"].front_default}
              />
            </Col>
            <Col>
              <ListGroup className="text-start">
                <ListGroup.Item key="poke_name">
                  <strong>Type: </strong> {
                    pokeApi.types.map((type) => (
                      type.type.name.charAt(0).toUpperCase()
                      + type.type.name.slice(1)
                      + " ")
                    )
                  }
                </ListGroup.Item>
                <ListGroup.Item key="strength">
                  <strong>Height:</strong> {pokeApi.height}
                </ListGroup.Item>
                <ListGroup.Item key="weight">
                  <strong>Weight:</strong> {pokeApi.weight}
                </ListGroup.Item>
                {
                  pokeApi.stats.map(stat => (
                    <ListGroup.Item key={stat.stat.name}>
                      <strong>
                        {
                          stat.stat.name == "hp"
                            ? stat.stat.name.toUpperCase()
                            : stat.stat.name
                              .charAt(0)
                              .toUpperCase()
                            + stat.stat.name.slice(1)}
                        {": "}
                      </strong>
                      {stat.base_stat}
                    </ListGroup.Item>)
                  )
                }
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  return (
    <>
      <h1 className="mt-3">There is no available data for this Pokémon</h1>
    </>
  );
}
