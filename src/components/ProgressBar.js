import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ currentFile, setCurrentFile }) => {
	const { fileUrl, uploadProgress, uploadError } = useStorage(currentFile);

	useEffect(() => {
		if (fileUrl) {
			setCurrentFile(() => null);
		}
	}, [fileUrl, setCurrentFile]);

	return (
		<div
			className={classes["progress-bar"]}
			style={{ width: uploadProgress + "%" }}
		></div>
	);
};

export default ProgressBar;
