import React, { useState } from 'react';

export const Navbar = () => {

    const [mobileActive, setMobileActive] = useState(false);



    document.addEventListener('DOMContentLoaded', () => {

        const header = document.querySelector('header');

        const navCheck = (ends) => {
            const { isIntersecting } = ends[0];
            const navBar = document.querySelector('.nav');
            const nav = document.querySelector('nav');
            const btnWp = document.querySelector('.btn-wp');

            if (!isIntersecting) {
                navBar.classList.add('nav-active');
                nav.classList.add('active');
                btnWp.classList.add('d-block');
            } else {
                navBar.classList.remove('nav-active');
                nav.classList.remove('active');
                btnWp.classList.remove('d-block');
            }
        };

        let observer = new IntersectionObserver(navCheck);

        observer.observe(header);

    })



    const handleMobileNav = () => {
        setMobileActive(!mobileActive);
    }



    return (
        <nav>
            <div className={`nav ${mobileActive ? 'active-mobile nav-active' : 'nav-active'}`}>
                <div className="nav__icons">
                    <a href='#inicio' className="nav__logo">
                        <svg><use href="./assets/svg/mzt.svg#logo"></use></svg>
                        <div className="nav__name">
                            <p>Proyecto<strong>Colinas del Mar</strong></p>
                        </div>
                    </a>
                    <svg className="mobile-nav-btn" onClick={handleMobileNav}>
                        <use href="./assets/svg/bars.svg#bars" ></use>
                    </svg>
                </div>
                <div className={`nav__links`}>
                    <a className="text-white link" onClick={handleMobileNav} href='#inicio' >Inicio</a>
                    <a className="text-white link" onClick={handleMobileNav} href='#terrenos' >Terrenos</a>
                    <a className="text-white link" onClick={handleMobileNav} href='#contacto' >Contáctanos</a>
                    <div className="nav__logo">
                        <svg><use href="./assets/svg/mzt.svg#logo"></use></svg>
                        <div className="nav__name">
                            <p><strong>Colinas del Mar</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
