import { useLoaderData } from "react-router-dom"
import { PokeApi } from "../utils/types";
import PokeCard from "../components/PokeCard";

export default function PokeDetails() {
  const data = useLoaderData() as PokeApi;
  return (
    <>
      <PokeCard pokeApi={data} />
    </>
  )
}
