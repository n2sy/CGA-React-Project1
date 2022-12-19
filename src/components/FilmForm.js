


import React, { useRef } from 'react'
import styles from './FilmItem.module.css';
import Card from './../layout/Card';

function FilmForm() {

    const title = useRef(); 
    const year = useRef();

    function submitHandler(event) {
        event.preventDefault();
        console.log(title.current.value, year.current.value);
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
            <input type="text" id="year" ref={year}></input>
            </div>
            <div className={styles.actions}>
            <button type="submit">Add Film</button>
            </div>
           
        </form>
    </Card>
  )
}

export default FilmForm