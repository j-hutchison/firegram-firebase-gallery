import React from "react";
import classes from "./Gallery.module.css";

const Gallery = () => {
	return (
		<div className={classes["firegram-gallery"]}>
			<img
				className={classes["gallery-image"]}
				src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg"
				alt="holidays"
			/>
			<img
				className={classes["gallery-image"]}
				src="https://cdn.pixabay.com/photo/2020/07/24/16/37/cactus-5434469_960_720.jpg"
				alt="cactus"
			/>
			<img
				className={classes["gallery-image"]}
				src="https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberries-1326154_960_720.jpg"
				alt="blueberries"
			/>
			<img
				className={classes["gallery-image"]}
				src="https://cdn.pixabay.com/photo/2016/08/15/10/14/wedding-1594957_960_720.jpg"
				alt="wedding"
			/>
			<img
				className={classes["gallery-image"]}
				src="https://cdn.pixabay.com/photo/2015/05/31/14/23/organizer-791939_960_720.jpg"
				alt="workstation"
			/>
		</div>
	);
};

export default Gallery;
