import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllFilms from './pages/AllFilms';
import AddFilm from './pages/AddFilm';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { useContext } from 'react';
import LoginContext from './store/login-context';



function App() {

  const logCtx = useContext(LoginContext);

  if(logCtx.isLogged)
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
   
 
  )
  else
  return (
    <>
    <Navbar></Navbar>   
       <Routes>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
    </Routes>
    </>
 

)
}

export default App;
