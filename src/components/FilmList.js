


import React from 'react';
import styles from './FilmList.module.css';
import FilmItem from './FilmItem';

function FilmList(props) {
    console.log("Film list");
  return (
    <div>
        <ol className={styles.list}>
            {props.films.map((element) => {

              return  <FilmItem key={element.id} oneFilm={element}></FilmItem> 
            }


            )}

        </ol>
    </div>
  )
}

export default FilmList