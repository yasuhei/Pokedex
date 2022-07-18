import React, { useContext } from "react";
import Context from "../Context";
import './index.css'

const Pokemon = (props) => {
    const {favoritePokemon, updateFavoritePokemon} = useContext(Context)
    const {pokemon} = props
    const onHeartClick = () => {
        updateFavoritePokemon(pokemon.name)
        console.log('favoritos')
    }
    const heart = favoritePokemon.includes(pokemon.name) ? '💕' : '🖤'
    return (
        
        <div className="card-pokemon">
            <div className="card-imag-container">
                <img className="pokemon-img" 
                 src={pokemon.sprites.front_default}
                  alt={pokemon.name} 
                  />
            </div>
            <div className="card-body">
            <div className="card-top">
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>

            <div className="card-bottom">
            <div className="card-type">
                {pokemon.types.map((type,index) => {
                    return (
                        <div key={index} className='card-text'>{type.type.name}</div>
                    )
                })}

            </div>
            <button className="btn-heart" onClick={onHeartClick}>{heart}</button>
            </div>

            </div>
        </div>
    )
}

export default Pokemon