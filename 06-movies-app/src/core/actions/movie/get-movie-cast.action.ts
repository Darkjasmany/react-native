import { movieApi } from "@/core/api/movie-api";
import { MovieDBCast } from "@/infrastructure/interfaces/moviedb-credit.response";

// TODO 4. Crear el actions
export const getMovieCastActions = async (
  id: number | string,
): Promise<MovieDBCast> => {
  try {
    const { data } = await movieApi.get(`/${id}/credits`);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to cast movie");
  }
};
