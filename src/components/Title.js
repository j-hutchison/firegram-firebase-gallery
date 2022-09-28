import React from "react";
import classes from "./Title.module.css";

const Title = () => {
	return (
		<div className={classes["title"]}>
			<h2>Your Pictures</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<button>+</button>
		</div>
	);
};

export default Title;
