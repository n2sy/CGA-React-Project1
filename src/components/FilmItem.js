


import React, { useContext } from 'react';
import Card from '../layout/Card';
import FavContext from '../store/favorites-context';
import styles from './FilmItem.module.css';


function FilmItem(props) {

  const favCtx = useContext(FavContext);
  function favHandler() {
    if(!favCtx.isFavorite(props.oneFilm.id))
     favCtx.addFavorites(props.oneFilm);
     else
      favCtx.removeFavorites(props.oneFilm.id);
  }

  const testFavorite = favCtx.isFavorite(props.oneFilm.id);

  return (
    <Card>
        <div className={styles.image}>
            <img src={props.oneFilm.image}></img>

        </div>
        <div className={styles.content}>
            <h3>{props.oneFilm.title}</h3>
            <p>{props.oneFilm.year}</p>
            <p>{props.oneFilm.description}</p>

        </div>
        <div className={styles.actions}>
            <button onClick={favHandler}>{testFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
        </div>
    </Card>
  )
}

export default FilmItem