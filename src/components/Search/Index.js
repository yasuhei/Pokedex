import React,{useState} from 'react';
import { searchPokemon } from '../../api';
import './index.css'

const Search = () => {


    const [search, setSearch] = useState('')
    const [pokemon,setPokemon] = useState('')

    const onChangeHandler = (event) => {
        setSearch(event.target.value)
    }

    const onBottonHandler = () => {
        onSearcHandler(search)
    }

    const onSearcHandler =  async (pokemon) => {
        const results = await searchPokemon(pokemon)
        setPokemon(results)
        console.log(results)
    
      }
    return (
        <div className="search_container">
            <div className="search">
                <input type="search"  placeholder="Buscar pokémon" onChange={onChangeHandler}/>
            </div>
            <div className="search-btn">
                <button onClick={onBottonHandler}>
                    Buscar
                </button>
            </div>
        {pokemon ? (
            <div>
                <div>{pokemon.name}</div>
                <div>{pokemon.weight}</div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
        ): ''}

        </div>
    )
}
export default Search