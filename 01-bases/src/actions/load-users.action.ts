import axios from "axios";
import type { PokeListResponse } from "../interfaces/reqres.response";

export const loadUserAction = async (cantidad: number) => {
  try {
    const { data } = await axios.get<PokeListResponse>(
      `https://pokeapi.co/api/v2/pokemon/${cantidad}`,
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
