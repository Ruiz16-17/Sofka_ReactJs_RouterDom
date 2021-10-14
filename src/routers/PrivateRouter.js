import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import { UseAuth } from '../auth/UseAuth';

export default function PrivateRouter({ component: Component, ...rest }) {

    const auth = UseAuth();
    const location = useLocation();

    return (
        <Route {...rest}>
            {
                auth.isLogged()
                    ?
                    <Component />
                    :
                    <Redirect to={{ pathname: "/login", state: {from : location}}} />
            }
        </Route>
    );
}
