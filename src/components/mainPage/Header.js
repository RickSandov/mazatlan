import React from 'react';
import {
    Link
} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header" >

            <div className="header__bc">
                <img src="./assets/images/hero.png" alt="" />
            </div>

            <div className="header__content">
                <Link to="/" className="btn btn-ghost">
                    Conoce el Proyecto
                </Link>
            </div>

            <a  id="inicio" href="#terrenos">
                <svg><use href="./assets/svg/down.svg#down"></use></svg>
            </a>

        </header>
    )
}
