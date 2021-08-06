import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD9w54ofBoHzZ71qSSTBc31poeWQcXTmCY",
    authDomain: "clone-2496f.firebaseapp.com",
    projectId: "clone-2496f",
    storageBucket: "clone-2496f.appspot.com",
    messagingSenderId: "14811378258",
    appId: "1:14811378258:web:43f5a42df06f15e342a58b"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export  {db,auth,provider};
