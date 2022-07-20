import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import './index.css'

const Pokedex = (props) => {
    const {pokemon, loading,page, totalPages, setPage} = props
    const onLeftClickHandler = () => {

        if(page > 0) {
            setPage(page - 1)
        }
    }
    
    const onRightClickHandler = () => {
        if(page+1 !== totalPages) {
            setPage(page + 1)
        }    

    }

    return (
        <div>
            <div className="pokedex_header">
            <h1>Pokedex</h1>
            <Pagination 
             page={page+1}


             totalPages={totalPages}
             onLeftClick={onLeftClickHandler}
             onRightClick={onRightClickHandler}
            />
            </div>
            {loading ? 
           (
           <div>Carregando ...</div> ) : (<div className='pokedex_grid'>
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