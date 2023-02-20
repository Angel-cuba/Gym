import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYUMcDcgnKVOxlAW_p1KpUpIPFu013GLQ',
  authDomain: 'gym-native-4b7ce.firebaseapp.com',
  projectId: 'gym-native-4b7ce',
  storageBucket: 'gym-native-4b7ce.appspot.com',
  messagingSenderId: '667412634240',
  appId: '1:667412634240:web:6fb75bf06acbb52e092465',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// let app;
// if (firebase.getApps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// }
// else {
//   app = firebase.getApp();
// }

// export const auth = getAuth(app);
