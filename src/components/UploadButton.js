import React, { useState } from "react";
import classes from "./UploadButton.module.css";
import ProgressBar from "./ProgressBar";

const UploadButton = ({ firestoreDb, storage }) => {
	const [currentFile, setCurrentFile] = useState(null);
	const [error, setError] = useState(null);
	const fileTypes = ["image/jpeg", "image/png"];

	const handleAddFileBtnClick = async (event) => {
		console.log("New file selected");

		const fileObj = event.target.files && event.target.files[0];
		if (!fileObj || !fileTypes.includes(fileObj.type)) {
			setError(
				() => "Please select a valid file type (image/jpeg or image/png"
			);
			return;
		}

		console.log("fileObj is", fileObj);
		event.target.value = null;

		setCurrentFile(() => fileObj);
	};

	return (
		<>
			<div className={classes["file-upload"]}>
				<input
					type="file"
					id="file-upload-btn"
					onChange={handleAddFileBtnClick}
					hidden
				/>
				<label
					className={classes["file-upload-label"]}
					htmlFor="file-upload-btn"
				>
					+
				</label>
			</div>

			<span className={classes["title-filename"]}>
				{error ? error : currentFile?.name}
				{currentFile && (
					<ProgressBar
						currentFile={currentFile}
						setCurrentFile={setCurrentFile}
					/>
				)}
			</span>
		</>
	);
};

export default UploadButton;
