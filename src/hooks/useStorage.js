import React, { useState, useEffect } from "react";
import { storage, fireStoredb, timestamp } from "../firebase/config";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
	const [uploadProgress, setUploadProgress] = useState(0);
	const [uploadError, setError] = useState(null);
	const [fileUrl, setFileUrl] = useState(null);

	useEffect(() => {
		const storageRef = ref(storage, file.name);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(() => progress);
			},
			(uploadError) => {
				// Handle unsuccessful uploads
				setError(() => uploadError);
			},
			async () => {
				const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
				const newDocumentId = await addDoc(collection(fireStoredb, "images"), {
					imageURL: downloadUrl,
					timestamp: timestamp.now(),
				});
				setFileUrl(() => downloadUrl);
			}
		);
	}, [file]);

	return { fileUrl, uploadProgress, uploadError };
};

export default useStorage;
