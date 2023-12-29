import { useContext } from "react";
import { PokeContext } from "../contexts/PokeProvider";

export default function usePoke() {
  const context = useContext(PokeContext);
  if (!context) {
    throw new Error("usePokeContext must be used within a PokeContextProvider")
  }
  return context;
}
