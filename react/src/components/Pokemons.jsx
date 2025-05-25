import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../redux/Pokemon/pokemonActions";

export default function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.list);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <>
      <h1>Pokémons</h1>
      <ul>
        {pokemons.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
      <h2>Bulba</h2>
    </>
  );
}
