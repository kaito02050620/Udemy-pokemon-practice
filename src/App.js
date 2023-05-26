import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";
const POKEMON_API = process.env.REACT_APP_POKEMON_API;

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    //すべてのポケモンデータを取得する
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(POKEMON_API);
      setPokemonData(res);
    };
    fetchPokemonData();
  }, []);

  console.log(pokemonData);

  return <div className="App">fdfdf</div>;
}

export default App;
