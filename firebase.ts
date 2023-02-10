// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYUMcDcgnKVOxlAW_p1KpUpIPFu013GLQ",
  authDomain: "gym-native-4b7ce.firebaseapp.com",
  projectId: "gym-native-4b7ce",
  storageBucket: "gym-native-4b7ce.appspot.com",
  messagingSenderId: "667412634240",
  appId: "1:667412634240:web:6fb75bf06acbb52e092465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

