import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./api";
import { FavoriteProvider } from "./components/Context";
import Navbar from "./components/NavBar/Navbar";
import Pokedex from "./components/Pokedex";
import Search from "./components/Search/Index";



function App() {
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [favorites, setFavorites] = useState([])
  const favoriteKey = 'f'

  const itensPerPage = 25


  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const data = await getPokemon(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemon(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))


    } catch (err) {
      console.error(err)
    }
  }
const  loadFavoritePokemon = () => {
  const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey))
  setFavorites(pokemons)
}
  useEffect( () => {
loadFavoritePokemon()

  },[])
  

  useEffect( () => {
    console.log("carregou")

    fetchPokemon()

  },[page])


  const updateFavoritePokemon = (name) => {
  const updateFavorites = [...favorites]
  const favoriteIndex = favorites.indexOf(name)
  if(favoriteIndex >= 0) {
    updateFavorites.slice(favoriteIndex, 1)
  } else {
    updateFavorites.push(name)

  }
  window.localStorage.setItem(favoriteIndex,JSON.stringify(updateFavorites))
  setFavorites(updateFavorites)
  }

  return (
    <FavoriteProvider
    value={{favoritePokemon:favorites, 
      updateFavoritePokemon:updateFavoritePokemon}}
    >
    <>
    <Navbar />
    <Search />
    <Pokedex
      pokemon={pokemon}
     loading={ loading} 
     page={page} 
     totalPages={totalPages}
     setPage={setPage}

     />
    </>
    </FavoriteProvider>
  );
}

export default App;
