import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// check if the user is logged in
// if they are and they happened to go to the auth pages 
// we redirect them to the browse page
export const IsUserRedirect = ({ user, loggedInPath, children, ...rest}) => {
    return (
        <Route {...rest} render={() => {
            if (!user) {
                return children
            };

            if (user) {
                return (
                    <Redirect to={{ pathname: loggedInPath }} />
                )
            };
            return null;
        }}
        />
    );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
    return (
        <Route {...rest} render={({ location }) => { // location is to know where the user is coming from to preserve history
            // it is being passed as an parameter to redirect the user 
            if (user) {
                return children; // children is the browse page
            }

            if (!user) {
                return (
                    <Redirect to={{ pathname: 'signin', state: { from: location}}}/>
                )
            }

            return null;
        }}/>
    );
};

// protected routes


// if a client comes in through the path sign in and the client is an authenticated user then he/she is redirected to the browse page
// if the client is not a user then  return children --  children will be a component page for sign in
// render={() => {}} is used instead of component={} if you have some code expression to carry out 