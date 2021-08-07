import * as firebase from 'firebase'
require('@firebase/firestore');
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyBi-d07AtRUBQ99MwNO-KcL-ot2OimUSCE",
    authDomain: "complaint-forum-c4f89.firebaseapp.com",
    projectId: "complaint-forum-c4f89",
    storageBucket: "complaint-forum-c4f89.appspot.com",
    messagingSenderId: "12898952167",
    appId: "1:12898952167:web:1deecb50785301b5ef9342"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);