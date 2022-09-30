import React from "react";
import classes from "./Title.module.css";
import UploadButton from "./UploadButton";

const Title = ({ firestoreDb, storage }) => {
	return (
		<div className={classes["title"]}>
			<h2>Your Pictures</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

			<UploadButton firestoreDb={firestoreDb} storage={storage} />
		</div>
	);
};

export default Title;
