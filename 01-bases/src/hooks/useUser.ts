import { useEffect, useState } from "react";
import type { PokeListResponse } from "../interfaces/reqres.response";
import { loadUserAction } from "../actions/load-users.action";

export const useUser = () => {
  const [pokemons, setPokemons] = useState<PokeListResponse[]>([]);

  useEffect(() => {
    loadUserAction(1).then((data) => {
      if (data) {
        // Envolvemos 'data' dentro de un array [data]
        setPokemons((prev) => [...prev, data]);
      }
    });
  }, []);

  return {
    pokemons,
  };
};
