import { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';

// this approach is better to be able to split the content into films and series
export default function useContent(target) {
    const [ content, setContent ] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        // look at firebase docs to get familiar with its methods
        firebase
            .firestore()
            .collection(target) // target is what the user wants film or series
            .get() // gets the target
            .then(( snapshot ) => { // takes a snapshot of the data
                // const allContent = snapshot.docs.map((contentObj) => ({
                //     ...contentObj.data(),
                //     docId: contentObj.id,
                // }));
                // snapshot is gotten as a response
                // this is a map function that returns an array of object
                const allContent = snapshot.docs.map((contentObj) => {
                    return {
                        ...contentObj.data(),
                        docId: contentObj.id
                    };
                });

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // return a new object
    // target will come through as series or films
    return { [target]: content }
};