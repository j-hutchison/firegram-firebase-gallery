import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore, Timestamp } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCbRDUXRb5H0NJvVblWasDrI96z01cHRMI",
	authDomain: "firegram-bc599.firebaseapp.com",
	projectId: "firegram-bc599",
	storageBucket: "firegram-bc599.appspot.com",
	messagingSenderId: "603616528372",
	appId: "1:603616528372:web:21d40af8402bf159ae1ba1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB used to provide a realtime connection to a database incl. the firebase storage URLs so that UI is dynamically updated
const fireStoredb = getFirestore(app);

// Firebase storage used for uploading images and returning download URLs for displaying images
const storage = getStorage(app);
const timestamp = Timestamp;
debugger;

export { fireStoredb, storage, timestamp };
