import React, { useEffect, useState } from "react";

import "./App.css";

import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Title from "./components/Title";

import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import {
	getFirestore,
	collection,
	query,
	onSnapshot,
} from "firebase/firestore";

function App() {
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
	const [imageURLs, setImageURLs] = useState([]);

	// Firestore DB used to provide a realtime connection to a database incl. the firebase storage URLs so that UI is dynamically updated
	const fireStoredb = getFirestore(app);

	// Firebase storage used for uploading images and returning download URLs for displaying images
	const storage = getStorage(app);

	useEffect(() => {
		// gets images from the images collection on firestore
		// async function getImages() {
		// 	return await getDocs(collection(fireStoredb, "images"));
		// }
		// getImages()
		// 	.then((docs) => {
		// 		docs.forEach((doc) => {
		// 			imageArray.push(doc.data().imageURL);
		// 		});
		// 	})
		// 	.then(() => {
		// 		setImageURLs(() => imageArray);
		// 	});

		// listen to firestore images collection in realtime and update imageURL state
		const q = query(collection(fireStoredb, "images"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const imageArray = [];
			querySnapshot.forEach((doc) => {
				imageArray.push(doc.data().imageURL);
			});
			setImageURLs(() => imageArray);
		});
	}, [fireStoredb]);

	return (
		<div className="App">
			<Banner />
			<main>
				<Title />
				<Gallery imageURLs={imageURLs} storage={storage} />
			</main>
		</div>
	);
}

export default App;
