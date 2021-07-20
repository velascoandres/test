import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { ProfileContext } from '../context/ProfileContext';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProfilePage } from '../pages/ProfilePage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter: React.FC = () => {
    const { userState, changeUser } = useContext(ProfileContext);

    const { user, loading } = userState;

    useEffect(() => {
        changeUser('velascoandres');
    }, [changeUser]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Router>
            <div>
                <Switch>
                    {/* 
                    If the user is null navigate to not-found
                */}
                    <PublicRoute
                        exact
                        path="/not-found"
                        component={NotFoundPage}
                        isAuthenticated={user !== null}
                    />
                    {/* 
                    If the user has been retrieved navigate to profile page 
                */}
                    <PrivateRoute
                        path="/"
                        component={ProfilePage}
                        isAuthenticated={user !== null}
                        redirectTo="/not-found"
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
