import React from 'react';
import { ButtonWp } from './mainPage/ButtonWp';
import { ContactForm } from './mainPage/ContactForm';
import { Gallery } from './mainPage/Gallery';
import { GoogleMaps } from './mainPage/GoogleMaps';
import { Header } from './mainPage/Header';
import { Pres } from './mainPage/Pres';
import { Terrenos } from './mainPage/Terrenos';

export const MainPage = () => {
    return (
        <>
            <Header />

            <Pres />

            <Gallery />

            <GoogleMaps />

            <Terrenos />

            <ContactForm />

            <ButtonWp />

        </>
    )
}
