
import styles from './FilmItem.module.css';


import React, { useState } from 'react'
import Card from './../layout/Card';

function FilmForm2() {
    // const [allForm, setAllForm] = useState({
    //     title : '',
    //     image : '',
    //     year : '',
    //     description : ''
    // })

    let mohamed = "Med";
    console.log(mohamed)
    const [title, setTitle] = useState('');
    
    const [image, setImage] = useState();
    const [year, setYear] = useState();
    const [description, setDescription] = useState('');
    console.log(title, image, year);
    function titleHandler(e) {
        mohamed = "majdi";
        setTitle(e.target.value);
        
        
    }
    function yearHandler(e) {
        setYear(e.target.value)
    }
    function imageHandler(e) {
        setImage(e.target.value)
    }
    function descHandler(e) {
        setDescription(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log({
            title : title,
            image : image,
            year : year,
            description : description
        })
    }

    return (
        <Card> 
            <form className='form' onSubmit={submitHandler}>
                <div className={styles.control}>
                <label htmlFor='title'>Title</label>
                <input type="text" id="title" onChange={titleHandler}></input>
                </div>
                <div className={styles.control}>
                <label htmlFor='year'>Year</label>
                <input type="number" id="year" onChange={yearHandler}></input>
                </div>
                <div className={styles.control}>
                <label htmlFor='image'>Image</label>
                <input type="text" id="image" onChange={imageHandler}></input>
                </div>
                <div className={styles.control}>
                <label htmlFor='desc'>Description</label>
                <textarea col="5" row="4" id="desc" onChange={descHandler}></textarea>
                </div>
                <div className={styles.actions}>
                <button type="submit">Add Film</button>
                </div>
               
            </form>
        </Card>
)}

export default FilmForm2