import React, { useState, useEffect } from "react";
import classes from "./Gallery.module.css";
import { motion } from "framer-motion";

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
			{props.images.map((img, index) => {
				return (
					<motion.img
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						transition={{ delay: 1 }}
						key={img.id}
						className={classes["gallery-image"]}
						src={img.imageURL}
						alt="uploaded gallery picture"
					/>
				);
			})}
		</div>
	);
};

export default Gallery;
