

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FavContext from '../store/favorites-context';
import classes from './Navbar.module.css';

function Navbar() {
    let activeStyle = {
        textDecoration : 'overline'
    }

    const favCtx = useContext(FavContext);
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Film Shop</div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>Home</NavLink>

                </li>
                <li>
                    <Link to="/allfilms">All Films</Link>

                </li>
                <li>
                    <NavLink to="/new-film" className={({isActive}) => isActive ? 'active' : ''}>Add Film</NavLink>

                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                      <span class="badge badge-secondary">{favCtx.nbFavorites}</span>

                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Navbar