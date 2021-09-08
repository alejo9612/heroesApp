import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext'; 
import { DashboardRoutes } from './DashboardRoutes';
import { LoginPage } from '../components/login/LoginPage';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" 
                                 component={LoginPage}
                                //  isAuthenticated={user.logged}
                    />
                    <PrivateRouter path="/" 
                                   component={DashboardRoutes}
                                   isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}
