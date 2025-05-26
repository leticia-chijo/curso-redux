import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText, fetchPokemons } from "../redux/pokemonSlice";
import { selectPokemonSearch } from "../redux/pokemonSelectors";

export default function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const text = useSelector((state) => state.pokemons.searchInput);
  const pokemonsSearched = useSelector(selectPokemonSearch)

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
      <input
        placeholder={"Busque seu Pokémon"}
        value={text}
        onChange={(e) => dispatch(changeText(e.target.value))}
      />
      <button>Buscar</button>
      <ul>
        {pokemonsSearched.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </>
  );
}
