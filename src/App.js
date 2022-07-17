import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./api";
import Navbar from "./components/NavBar/Navbar";
import Pokedex from "./components/Pokedex";
import Search from "./components/Search/Index";


function App() {
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])


  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const data = await getPokemon()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemon(results)
      setLoading(false)


    } catch (err) {
      console.error(err)
    }
  }

  useEffect( () => {
    console.log("carregou")

    fetchPokemon()

  },[])

  return (
    <>
    <Navbar />
    <Search />
    <Pokedex  pokemon={pokemon} loading={ loading}/>
    </>
  );
}

export default App;
