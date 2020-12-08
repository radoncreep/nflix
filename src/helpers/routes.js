import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// check if the user is logged in
// if they are and they happened to go to the auth pages 
// we redirect them to the browse page
export function IsUserRedirect({ user, loggedInPath, children, ...rest}) {
    return (
        <Route
            {...rest}
            render={() => {
                if(!user) {
                    return children
                }
            }}
        />
    )
}

// protected routes