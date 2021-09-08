import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DcPage } from '../components/dc/DcPage';
import { HeroesPage } from '../components/heroes/HeroesPage';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { SearchPage } from '../components/search/SearchPage';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component={MarvelPage}/>
                    <Route exact path="/heroe/:heroeId" component={HeroesPage}/>
                    <Route exact path="/dc" component={DcPage}/>
                    <Route exact path="/Buscar" component={SearchPage}/>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
