import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// to get data into the cloud firestore
// import the seed file which contains the data 
// this should be done once or you are gonna get duplicate data
// import { seedDatabase } from '../seed';
// once this module runs and executes the function
// that adds the data in the seed file to the cloud firestore
// we should delete the seed.js file in the source folder
// so if this gets execute again it wont have any data to pass to the cloud storage


// we need to somehow seed the database

// we need the config here - which is a bunch of keys to be gotten from firebase
// getting this from project overview
// create app ---> web app
// add firebase SDK ---> copied the firebaseConfig object literal 
// and paste into the config obj here

const config = {
    apiKey: "AIzaSyC_IWHlvNLbM0R5PnfKtnXvmmFKREJ7_4k",
    authDomain: "netflix-ytref.firebaseapp.com",
    projectId: "netflix-ytref",
    storageBucket: "netflix-ytref.appspot.com",
    messagingSenderId: "272163404547",
    appId: "1:272163404547:web:e3f0a8612d71cad6f1c736"
};

// this initializes/setup your web app on firebase with the above config data
const firebase = Firebase.initializeApp(config);

// this takes in the initialized web app "firebase"
// and then uses the firebase web app const to 
// add collections, by calling the firestore and collection method on it
// seedDatabase(firebase);

export { firebase };
