import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

// we need this to be able to listen to the user's state

export default function useAuthListener() {
    // storing the user action to check if the user logged in or out
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUser')));

    // listen to firebase on authentication change
    const { firebase } = useContext(FirebaseContext);

    // binding the listener to listen for us
    useEffect(() => {
        // assigning a listener
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            // so if the user is logged in we want to store what firebase gives us as a JSON object
            // setting the item in LS "authUser" as key then the JSON object as value
            if (authUser) {  // if there is an authenticated user
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else { // if the user logs out then we remove the user auth details from the local storage and set state to null
                localStorage.removeItem('authUser');
                setUser(null);
            };
        });

        // clean up the listener
        return () => listener();
    });

    // returning an object
    return { user }
};

// putting objects you stringify them to create a JSON
// pulling them out you parse them to become normal object literals


// how listeners can effect react
// what errors can be caused when you have multiplex components to touching one another 
// or transitioning from one page to another

