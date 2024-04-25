// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDxV48MeF3MGwaEFI4teaxBDHUhzjcSqes",
	authDomain: "boat-test-app.firebaseapp.com",
	projectId: "boat-test-app",
	storageBucket: "boat-test-app.appspot.com",
	messagingSenderId: "191369092010",
	appId: "1:191369092010:web:a7ed71087c0ac7516ba9d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
	return app;
};
