import React from 'react';
import { Redirect, Route } from 'react-router';
import { UseAuth } from '../auth/UseAuth';

export default function PublicRoute({ component:
    Component, ...rest }) {

    const auth = UseAuth();

    return (
        <Route {...rest}>
            {
                !auth.isLogged()
                    ?
                    <Component />
                    :
                    <Redirect to={{ pathname: "/"}} />
            }
        </Route>
    );
}
