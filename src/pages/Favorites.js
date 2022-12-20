


import React, { useContext } from 'react'
import FavContext from '../store/favorites-context'
import FilmList from './../components/FilmList';

function Favorites() {
  const FavCtx = useContext(FavContext);
  return (
    <div>

      <FilmList films={FavCtx.favorites}></FilmList> 
    </div>
  )
}

export default Favorites