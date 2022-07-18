import React from 'react';
import './index.css'

const Context = React.createContext({   
    favoritePokemon: [],
    updateFavoritePokemon: (id) => null   

})



export const FavoriteProvider = Context.Provider 
export default Context