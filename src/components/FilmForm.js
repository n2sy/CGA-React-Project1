


import React, { useRef } from 'react'
import styles from './FilmItem.module.css';
import Card from './../layout/Card';
import { useNavigate } from 'react-router-dom';

function FilmForm() {

    const title = useRef(); 
    const year = useRef();
    const image = useRef(); 
    const description = useRef();

    console.log(title);

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const newFilm = {
          title : title.current.value,
          year : year.current.value,
          image : image.current.value,
          description : description.current.value,
        }
        fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json', 
        {
          method : 'POST',
          body: JSON.stringify(newFilm)
        })
        .then(response => {
          alert('Film Add Successfully');
       //   navigate("/allfilms", {replace : true} )
          navigate("/allfilms");

        })
        .catch(err => {
          console.log(err);
        })
    }
  return (
    <Card>
        <form className='form' onSubmit={submitHandler}>
            <div className={styles.control}>
            <label htmlFor='title'>Title</label>
            <input type="text" id="title" ref={title}></input>
            </div>
            <div className={styles.control}>
            <label htmlFor='year'>Year</label>
            <input type="number" id="year" ref={year}></input>
            </div>
            <div className={styles.control}>
            <label htmlFor='image'>Image</label>
            <input type="text" id="image" ref={image}></input>
            </div>
            <div className={styles.control}>
            <label htmlFor='desc'>Description</label>
            <textarea col="5" row="4" id="desc" ref={description}></textarea>
            </div>
            <div className={styles.actions}>
            <button type="submit">Add Film</button>
            </div>
           
        </form>
    </Card>
  )
}

export default FilmForm