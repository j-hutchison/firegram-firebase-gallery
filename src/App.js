import React, { useEffect, useState } from "react";

import "./App.css";

import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Title from "./components/Title";

import { fireStoredb, storage } from "./firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const q = query(
			collection(fireStoredb, "images"),
			orderBy("timestamp", "desc")
		);
		console.log(q);
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const imageArray = [];
			querySnapshot.forEach((doc) => {
				imageArray.push({
					imageURL: doc.data().imageURL,
					timestamp: doc.data().timestamp,
					id: doc.id,
				});
			});
			setImages(() => imageArray);
		});

		return () => unsubscribe();
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
