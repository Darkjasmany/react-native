import axios from "axios";
import type {
  PokeListResponse,
  PokemonDetail,
} from "../interfaces/reqres.response";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const loadUserAction = async (
  limit: number = 10,
  offset: number = 0,
): Promise<PokemonDetail[]> => {
  try {
    // Petición a la lista principal con PokeListResponse
    const { data } = await axios.get<PokeListResponse>(
      `${BASE_URL}?limit=${limit}&offset=${offset}`,
    );

    // Petición individual para cada elemento usando PokemonDetail
    const pokemonPromises = data.results.map(async (pokemon) => {
      const resp = await axios.get<PokemonDetail>(pokemon.url);
      return resp.data;
    });

    const pokemons = await Promise.all(pokemonPromises);
    return pokemons; // Retorna un array de PokemonDetail[]
  } catch (error) {
    console.error("Error al cargar Pokémon:", error);
    return [];
  }
};
