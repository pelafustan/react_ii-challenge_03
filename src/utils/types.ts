export type PokeApi = {
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      }
    }
  }
  types: {
    type: {
      name: string;
    };
  }[];
}
