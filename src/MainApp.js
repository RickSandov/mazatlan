import React, { useState } from 'react';
import { UserContext } from './components/UserContext';
import { AppRouter } from './router/AppRouter';

export const MainApp = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        phone: 0,
        email: '',
        msg: '',
        date: '',
        lotId: 0,
        _id: 0,
        manzana: 0,
        active: false
    });

    return (
        <UserContext.Provider value={{formFields, setFormFields}}>
            <AppRouter />
        </UserContext.Provider>
    )
}
