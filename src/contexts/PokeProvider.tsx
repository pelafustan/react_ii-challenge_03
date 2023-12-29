import { createContext, useEffect, useState } from "react";


const url = "https://pokeapi.co/api/v2/pokemon";

type PokeEntry = {
  name: string;
  url: string;
}

type PokeContext = {
  pokeList: PokeEntry[];
}

export const PokeContext = createContext<PokeContext>({} as PokeContext);

export default function PokeProvider({ children }: { children: React.ReactNode }) {
  const [pokeList, setPokeList] = useState<PokeEntry[]>([] as PokeEntry[]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url)
        .then(res => res.json())
        .then(data => data.results);
      setPokeList(data);
    };
    getData();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokeList,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
