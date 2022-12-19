


import React from 'react';
import Card from '../layout/Card';
import styles from './FilmItem.module.css';


function FilmItem(props) {
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
            <button>To Favorites</button>
        </div>
    </Card>
  )
}

export default FilmItem