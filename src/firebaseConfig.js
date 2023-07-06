import firebase from 'firebase/app';
import 'firebase/database';
const firebaseConfig = {
	apiKey: 'AIzaSyDmYwpTACYAMha5Yrg_L5n0tlH1j3R9Hjs',
	authDomain: 'testpro-f2f71.firebaseapp.com',
	databaseURL: 'https://testpro-f2f71-default-rtdb.firebaseio.com',
	projectId: 'testpro-f2f71',
	storageBucket: 'testpro-f2f71.appspot.com',
	messagingSenderId: '397180318467',
	appId: '1:397180318467:web:87da7fb651883c2b5f2f36',
	measurementId: 'G-505VGHJ80T',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export default firebase;
