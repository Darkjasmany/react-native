// 1. Respuesta de la lista paginada (GET /pokemon?limit=X)
export interface PokeListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
}

// 2. Detalle completo de un Pokémon (GET /pokemon/1/ o desde la URL de cada resultado)
export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: Sprites;
  types: TypeElement[];
  // Agrega más propiedades según lo que necesites en tu UI
}

export interface Sprites {
  front_default: string | null;
  other?: {
    "official-artwork": {
      front_default: string | null;
    };
  };
}

export interface TypeElement {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
