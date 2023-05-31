import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEd_NqzschzzpetGdX81EJtmKGCYNC8DU",
  authDomain: "sports-on-web.firebaseapp.com",
  projectId: "sports-on-web",
  storageBucket: "sports-on-web.appspot.com",
  messagingSenderId: "194907241133",
  appId: "1:194907241133:web:b858410222b5653f032424",
  measurementId: "G-F7MGJC77JQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};