import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDDKB-2OYaaiYbO8qGzYErzwQ5Em-8qauY",
  authDomain: "projeto71-f8bc3.firebaseapp.com",
  projectId: "projeto71-f8bc3",
  storageBucket: "projeto71-f8bc3.appspot.com",
  messagingSenderId: "375488512731",
  appId: "1:375488512731:web:e15d1b15622345eae882fe"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();