import* as firebase from 'firebase'

const settings = {timestampInSnapshots:true}
var firebaseConfig = {
    apiKey: "AIzaSyBP_-u64VjF7nfn6z6ahLmFY8RXUmOLbEk",
    authDomain: "data-visualizion.firebaseapp.com",
    projectId: "data-visualizion",
    storageBucket: "data-visualizion.appspot.com",
    messagingSenderId: "650784036457",
    appId: "1:650784036457:web:36c94b68a408f57986f4f8"
  };
  // Initialize Firebase
  firebase.intializeApp(firebaseConfig);
  firebase.firestone().settings(settings);

  export default firebase;
  