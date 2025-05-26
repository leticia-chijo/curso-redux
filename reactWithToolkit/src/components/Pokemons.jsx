import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../redux/pokemonSlice";
import { selectPokemonsWithC } from "../redux/pokemonSelectors";

export default function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const pokemonsWithC = useSelector(selectPokemonsWithC);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  if (pokemons.loading) {
    return <div>Loading...</div>;
  }

  if (!pokemons.loading && pokemons.error) {
    return <div>{pokemons.error}</div>;
  }

  return (
    <>
      <h1>Pokémons</h1>
      <button onClick={() => console.log(pokemonsWithC)}>Listar C</button>
      <ul>
        {pokemons.list.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </>
  );
}
