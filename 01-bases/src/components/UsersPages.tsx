import UserRow from "./UserRow";
import { useUser } from "../hooks/useUser";

const UsersPages = () => {
  const { pokemons, page, nextPage, prevPage } = useUser();

  return (
    <>
      <h3>Usuarios / Pokémon (Página {page}): </h3>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Tipos</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <UserRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="p-2 bg-blue-500 rounded-xl text-white disabled:opacity-50"
        >
          &larr; Prev
        </button>
        <button
          onClick={nextPage}
          className="p-2 bg-blue-500 rounded-xl text-white"
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};

export default UsersPages;
