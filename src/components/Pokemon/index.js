import React from "react";
import './index.css'

const Pokemon = (props) => {
    const {pokemon} = props
    return (
        
        <div className="card-pokemon">
            <div className="card-imag">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            </div>
            {pokemon.name}
        </div>
    )
}

export default Pokemon