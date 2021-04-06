import React from 'react';

export const Navbar = () => {
    return (
        <nav>
            <div className="nav">
            <a href='#inicio' className="nav__logo">
                <svg><use href="./assets/svg/mzt.svg#logo"></use></svg>
                <div className="nav__name">
                    <p>Proyecto<strong>Mazatlán</strong></p>
                </div>
            </a>
            <div className="nav__links">
                <a className="text-white link" href='#inicio' >Inicio</a>
                <a className="text-white link" href='#terrenos' >Terrenos</a>
                <a className="text-white link" href='#contacto' >Contáctanos</a>
            </div>
            </div>
        </nav>
    )
}
