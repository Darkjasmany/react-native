import type { PokemonDetail } from "../interfaces/reqres.response";

interface Props {
  pokemon: PokemonDetail;
}

const UserRow = ({ pokemon }: Props) => {
  const imageUrl =
    pokemon.sprites.front_default ||
    pokemon.sprites.other?.["official-artwork"].front_default;

  const namePokemon =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <tr className="p-2">
      <td>
        <img
          src={imageUrl!}
          alt={pokemon.name}
          className="w-12 h-12 object-contain mx-auto"
        />
      </td>
      <td className="text-center">{namePokemon}</td>
      <td className="text-center">
        {" "}
        {pokemon.types
          .map(
            (t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1),
          )
          .join(", ")}{" "}
      </td>
    </tr>
  );
};

export default UserRow;
