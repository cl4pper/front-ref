// import * as firebase from 'firebase'
import Firebase from 'firebase'
import Rebase from 're-base'


// initialize Firebase
const FIREBASE_CONFIG = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
}
// firebase.initializeApp(config);

const FIREBASE_INIT = Firebase.initializeApp(FIREBASE_CONFIG)
const FIREBASE_BASE = Rebase.createClass(FIREBASE_INIT.database())

// const databaseRef = FIREBASE_DB.ref('names')

export { FIREBASE_BASE }