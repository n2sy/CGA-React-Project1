import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AllFilms from './pages/AllFilms';
import AddFilm from './pages/AddFilm';
import Favorites from './pages/Favorites';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="allfilms" element={<AllFilms></AllFilms>}></Route>
      <Route path="add-film" element={<AddFilm></AddFilm>}></Route>
      <Route path="favorites" element={<Favorites></Favorites>}></Route>
    </Routes>
  );

}

export default App;
