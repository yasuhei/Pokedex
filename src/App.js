import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData, searchPokemon } from "./api";
import { FavoriteProvider } from "./components/Context";
import Navbar from "./components/NavBar/Navbar";
import Pokedex from "./components/Pokedex";
import Search from "./components/Search/Index";



function App() {
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [favorites, setFavorites] = useState([])
  const favoriteKey = 'f'

  const itensPerPage = 25


  const fetchPokemon = async () => {
    try {
      setLoading(true)
      setNotFound(false)
      const data = await getPokemon(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
  
      
      const results = await Promise.all(promises)
      setPokemon(results)

      const local = results.map( (local) => 
      local.location_area_encounters)
        

      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
      console.log(results)

    } catch (err) {
      console.error(err)
    }
  }
const  loadFavoritePokemon = () => {
  const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || []
  setFavorites(pokemons)
}
  useEffect( () => {
loadFavoritePokemon()

  },[])
  

  useEffect( () => {
    fetchPokemon()

  },[page])


  const updateFavoritePokemon = (name) => {
  const updateFavorites = [...favorites]
  const favoriteIndex = favorites.indexOf(name)
  if(favoriteIndex >= 0) {
    updateFavorites.splice(favoriteIndex, 1)
  } else {
    updateFavorites.push(name)

  }
  window.localStorage.setItem(favoriteIndex,JSON.stringify(updateFavorites))
  setFavorites(updateFavorites)
  }

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemon()
    }
    setLoading(true)
    setNotFound(false)

    const result = await searchPokemon(pokemon)
    if(!result) {
      setLoading(false)
      setNotFound(true)
    } else {
      setPokemon([result])
      setPage(0)
      setTotalPages(1)

    }
    setLoading(false)

  }
  return (
    <FavoriteProvider
    value={{favoritePokemon:favorites, 
      updateFavoritePokemon:updateFavoritePokemon}}
    >
    <>
    <Navbar />
    <Search onSearch={onSearchHandler} />
    {notFound ? (
      <div className="notfound"> Pokemon nao encontrado</div>
    ) :
    (<Pokedex
      pokemon={pokemon}
     loading={ loading} 
     page={page} 
     totalPages={totalPages}
     setPage={setPage}

     />)}
    </>
    </FavoriteProvider>
  );
}

export default App;
