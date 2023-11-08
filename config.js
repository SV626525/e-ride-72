import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD2AWn4yAg0d0gOrRLYeX84S_fH3llj43Q",
  authDomain: "e-ride-71-58df9.firebaseapp.com",
  projectId: "e-ride-71-58df9",
  storageBucket: "e-ride-71-58df9.appspot.com",
  messagingSenderId: "83431085306",
  appId: "1:83431085306:web:635f52774b3912362e6543",
  measurementId: "G-42X17WTT0V"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
