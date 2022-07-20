import React,{useState} from 'react';
import './index.css'

const Search = (props) => {


    const [search, setSearch] = useState('')
    const {onSearch} = props

    const onChangeHandler = (event) => {
        setSearch(event.target.value)
        if(event.target.lenght === 0) {
            onSearch(undefined)
        }
    }

    const onBottonHandler = () => {
        onSearch(search)
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
       

        </div>
    )
}
export default Search