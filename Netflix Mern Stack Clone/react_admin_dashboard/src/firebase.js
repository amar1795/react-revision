import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAcT1Rg0kacHjuHS5DFoXihKohfgx3JfgE",
    authDomain: "netflix-clone-b30f2.firebaseapp.com",
    projectId: "netflix-clone-b30f2",
    storageBucket: "netflix-clone-b30f2.appspot.com",
    messagingSenderId: "35939629766",
    appId: "1:35939629766:web:2eaf56eecf1faf0bb1b5c7",
    measurementId: "G-HSMGZQVHTD"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;