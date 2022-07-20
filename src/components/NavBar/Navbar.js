import React, {useContext} from 'react';
import './Navbar.css'
import '../../App.css'
import Context from '../Context';

const Navbar = () => {
    const {favoritePokemon} = useContext(Context)

    const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' 

return(
        <nav>
            <div>
                <img src={logoImg}
                alt='pokeapi-logo'
                className='navbar' />
            </div>
            <div>{favoritePokemon.length} ❤</div>
        </nav>

)

}

export default Navbar