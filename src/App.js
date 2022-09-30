import React, { useEffect, useState } from "react";

import "./App.css";

import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Title from "./components/Title";

import { fireStoredb, storage } from "./firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const q = query(collection(fireStoredb, "images"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const imageArray = [];
			querySnapshot.forEach((doc) => {
				imageArray.push({
					imageURL: doc.data().imageURL,
					timestamp: doc.data().timestamp,
				});
			});
			setImages(() => imageArray);
		});
	}, [fireStoredb]);

	return (
		<div className="App">
			<Banner />
			<main>
				<Title firestoreDb={fireStoredb} storage={storage} />
				<Gallery images={images} />
			</main>
		</div>
	);
}

export default App;
