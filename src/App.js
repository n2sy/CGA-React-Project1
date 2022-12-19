import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllFilms from './pages/AllFilms';
import AddFilm from './pages/AddFilm';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';



function App() {
  return (
      <>
      <Navbar></Navbar>   
         <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='allfilms' element={<AllFilms></AllFilms>}></Route>
        <Route path='new-film' element={<AddFilm></AddFilm>}></Route>
        <Route path='favorites' element={<Favorites></Favorites>}></Route>

      </Routes>
      </>
   
 
  );
}

export default App;
