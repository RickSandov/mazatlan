import React from 'react';

export const Header = () => {
    return (
        <header data-page="head" className="header" >

            <div className="header__bc">
                <video autoPlay="autoplay" muted loop>
                    <source src="./assets/mzt.mp4" type="video/mp4" />
                </video>
                
            </div>

            <div className="header__content">
                <a href="#terrenos" className="btn btn-ghost">
                    Conoce el Proyecto
                </a>
            </div>

            <a  id="inicio" href="#terrenos">
                <svg><use href="./assets/svg/down.svg#down"></use></svg>
            </a>

        </header>
    )
}
