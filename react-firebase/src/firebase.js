// import * as firebase from 'firebase'
import Firebase from 'firebase'


// Initialize Firebase
const FIREBASE_CONFIG = Firebase.initializeApp ({
	apiKey: "AIzaSyDv_YzMk3Xf__CC4TdUU1hhrVbJLSPskXo",
	authDomain: "react-firebase-17d15.firebaseapp.com",
	databaseURL: "https://react-firebase-17d15.firebaseio.com",
	projectId: "react-firebase-17d15",
	storageBucket: "react-firebase-17d15.appspot.com",
	messagingSenderId: "453015460755"
})
// firebase.initializeApp(config);

export const FIREBASE_DB = FIREBASE_CONFIG.database()
export const databaseRef = FIREBASE_DB.ref('names')