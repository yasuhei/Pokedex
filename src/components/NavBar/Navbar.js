import React from 'react';
import './Navbar.css'
import '../../App.css'

const Navbar = () => {

    const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' 

return(
        <nav>
            <div>
                <img src={logoImg}
                alt='pokeapi-logo'
                className='navbar' />
            </div>
        </nav>

)

}

export default Navbar