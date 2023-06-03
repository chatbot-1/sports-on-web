import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC9o8p42CeEitDHdPP5v0evoIige6-bvM",
  authDomain: "sports-on-web-8105c.firebaseapp.com",
  projectId: "sports-on-web-8105c",
  storageBucket: "sports-on-web-8105c.appspot.com",
  messagingSenderId: "31583818689",
  appId: "1:31583818689:web:f2af87e69944ec42469540",
  measurementId: "G-EXPBK8DQ3N"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};