import React from "react";
import Pokemon from "../Pokemon";
import './index.css'

const Pokedex = (props) => {
    const {pokemon, loading} = props

    return (
        <div>
            <div className="pokedex_header">
            <h1>Pokedex</h1>
            <div>Paginação</div>
            </div>
            {loading ? 
           (
           <div>Teste</div> ) : (<div className='pokedex_grid'>
             {pokemon && pokemon.map((pokemon, index) => {

                
                return(
                    <Pokemon key={index} pokemon={pokemon}/>
                )
            } )}
           </div>) 
        
        }
        </div>
    )
}

export default Pokedex