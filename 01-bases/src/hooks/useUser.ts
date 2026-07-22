import { useEffect, useState } from "react";
import type { PokemonDetail } from "../interfaces/reqres.response";
import { loadUserAction } from "../actions/load-users.action";

export const useUser = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit = 15; // Cantidad de Pokémons por página

  useEffect(() => {
    // Calculamos el offset en base a la página actual
    const offset = (page - 1) * limit;

    loadUserAction(limit, offset).then((data) => {
      if (data) {
        setPokemons(data);
      }
    });
  }, [page]); // Al cambiar 'page', el useEffect se ejecuta automáticamente

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return {
    pokemons,
    page,
    nextPage,
    prevPage,
  };
};
