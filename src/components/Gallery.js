import React, { useState, useEffect } from "react";
import classes from "./Gallery.module.css";

const Gallery = (props) => {
	// const [images, setImages] = useState([]);
	// const storageRef = ref(props.storage);

	// useEffect(() => {
	// 	listAll(storageRef)
	// 		.then(async (res) => {
	// 			const { items } = res;
	// 			const urls = await Promise.all(
	// 				items.map((item) => getDownloadURL(item))
	// 			);

	// 			setImages(urls);
	// 			console.log(urls);
	// 		})
	// 		.catch((error) => {
	// 			// Uh-oh, an error occurred!
	// 		});
	// }, []);

	return (
		<div className={classes["firegram-gallery"]}>
			{props.images
				.sort((img1, img2) => img2.timestamp - img1.timestamp)
				.map((img, index) => {
					return (
						<img
							key={index}
							className={classes["gallery-image"]}
							src={img.imageURL}
							alt="image"
						/>
					);
				})}
		</div>
	);
};

export default Gallery;
