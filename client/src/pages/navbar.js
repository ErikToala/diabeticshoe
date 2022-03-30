import React, { useState } from "react";
import '../pages/styles/navbar.css'
import {Link} from "react-router-dom"

function Navbar(){

    return(
        <header>
            <div className="logo">
                <h2 className='header__logo'> Biomedica</h2>
            </div>
            <nav className="nav" id="nav_menu">
                <ul className='nav__list'>
                    <li className='nav__item'><Link to="/" className="nav_link">Inicio</Link></li>
                    <li className='nav__item'><Link to="/historial-clinico" className="nav_link">Historial Clínico</Link></li>
                    <li className='nav__item'></li>
                    <li className='nav__item'><a href='#' className='nav__link'>Analisis t/Real</a></li>
                    <li className='nav__item'><Link to="/colaboradores" className="nav_link">Colaboradores</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;