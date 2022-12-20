


import React, { useEffect, useState } from 'react';
import FilmList from '../components/FilmList';

const FAKE_DATA = [
    // {
    //     id: 'f1',
    //     title: 'Heat',
    //     year: 1995,
    //     image: 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-08/heat.jpg',
    //     description: "La bande de Neil McCauley à laquelle est venu se greffer Waingro, une nouvelle recrue, attaque un fourgon blindé pour s'emparer d'une somme importante en obligations."
    // },
    // {
    //     id: 'f2',
    //     title: 'Inception',
    //     year: 2010,
    //     image: 'https://cdn2.daily-movies.ch/wp-content/uploads/2014/11/daily-movies.ch_Inception.jpeg',
    //     description: "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu"
    // }
];

function AllFilms() {
  let [allFilms, setAllFilms] = useState([]); 
  let [loading, setLoading] = useState(true); 


  useEffect(() => { 
    console.log("Dans USEFFECT");
    fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    setLoading(false);
    console.log(data);
    const tabFetched = [];
    for (const key in data) {
      //v1
      // data[key].id = key;
      // tabFetched.push(data[key]);

      //v2
       tabFetched.push({id : key, ...data[key]})
        
      }
    //  console.log(tabFetched);
    setAllFilms(tabFetched);
    }
   
  )}, [])

 
    if(loading)
    return (
      <section>
        <center>
          <h3>Data is loading....</h3>
        </center>
      </section>
    )
    else
  return (
    <div>
        <FilmList films={allFilms}></FilmList>
    </div>
  )
}

export default AllFilms