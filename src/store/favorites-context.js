import { createContext, useState } from "react";

 const FavContext = createContext(
    {
        favorites : [],
        nbFavorites : 0,
        addFavorites : () => {},
        removeFavorites : () => {},
        isFavorite : () => {}
    }
)

export function FavoritesContextProvider(props) {
    const [listFavorites, setListFavorites] = useState([]);

    function ajouterFavorite(filmFav) {
        setListFavorites((prev) => {
            if(prev.indexOf(filmFav) == -1)
                return [...prev, filmFav];
            return prev;
        })
    }

    function supprimerFavorites(id) {
        setListFavorites(prev => {
            return prev.filter((elt) => elt.id != id);
        })

    }

    function isFavorite(id) {
        return listFavorites.some((elt) => elt.id == id)
    }


    const context = {
        favorites : listFavorites,
        nbFavorites : listFavorites.length,
        addFavorites : ajouterFavorite,
        removeFavorites : supprimerFavorites,
        isFavorite : isFavorite
    }

    return <FavContext.Provider value={context}>
        {props.children}
    </FavContext.Provider>
}

export default FavContext;