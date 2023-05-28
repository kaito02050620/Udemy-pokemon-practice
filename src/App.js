import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
const POKEMON_API = process.env.REACT_APP_POKEMON_API;

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    //すべてのポケモンデータを取得する
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(POKEMON_API);

      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <h1>ポケモンデータを取得しました</h1>
      )}
    </div>
  );
}

export default App;
