import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import classes from "./ProgressBar.module.css";

import { motion } from "framer-motion";

const ProgressBar = ({ currentFile, setCurrentFile }) => {
	const { fileUrl, uploadProgress, uploadError } = useStorage(currentFile);

	useEffect(() => {
		if (fileUrl) {
			setCurrentFile(() => null);
		}
	}, [fileUrl, setCurrentFile]);

	return (
		<motion.div
			className={classes["progress-bar"]}
			initial={{ width: 0 }}
			animate={{ width: uploadProgress + "%" }}
		></motion.div>
	);
};

export default ProgressBar;
