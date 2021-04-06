import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { MainPage } from "../components/MainPage";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />

                <Switch>
                    <Route path="/" component={ MainPage } ></Route>
                    
                    <Redirect to="/" ></Redirect>
                </Switch>

            </>
        </Router>
    )
}
