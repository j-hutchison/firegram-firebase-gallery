import React, { useState } from "react";
import classes from "./Title.module.css";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, doc, addDoc } from "firebase/firestore";

const Title = (props) => {
	const [currentFile, setCurrentFile] = useState(null);

	const handleAddFileBtnClick = async (event) => {
		console.log("New file selected");

		const fileObj = event.target.files && event.target.files[0];
		if (!fileObj) {
			return;
		}

		console.log("fileObj is", fileObj);

		// 👇️ reset file input
		event.target.value = null;

		setCurrentFile(() => fileObj.name);
		const downloadUrl = await uploadFileToFirebaseStorage(fileObj);
		console.log(downloadUrl);
		const newDocumentId = await addDoc(
			collection(props.firestoreDatabase, "images"),
			{
				imageURL: downloadUrl,
			}
		);
		console.log(newDocumentId);
	};

	const uploadFileToFirebaseStorage = async (file) => {
		const storageRef = ref(props.storage, file.name);

		const snapshot = await uploadBytes(storageRef, file);
		const downloadUrl = await getDownloadURL(snapshot.ref);

		console.log(downloadUrl);
		return downloadUrl;
	};

	return (
		<div className={classes["title"]}>
			<h2>Your Pictures</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

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

			<span className={classes["title-filename"]}>{currentFile}</span>
		</div>
	);
};

export default Title;
