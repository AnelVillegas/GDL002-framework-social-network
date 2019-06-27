
import firebase  from 'firebase';

// Your web app's Firebase configuration
const Config = {
    apiKey: "AIzaSyDdbD2rxzz9pAcZjlyPVXZll51C1KtBEIM",
    authDomain: "runners-social-network-1cec6.firebaseapp.com",
    databaseURL: "https://runners-social-network-1cec6.firebaseio.com",
    projectId: "runners-social-network-1cec6",
    storageBucket: "runners-social-network-1cec6.appspot.com",
    messagingSenderId: "672668791480",
    appId: "1:672668791480:web:c65d56de8989cf53"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

  
  export default firebase;