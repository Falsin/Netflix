import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs4soSZK1zPYHn_PCoe4diGOYISfQIEL4",
  authDomain: "netflix-a5529.firebaseapp.com",
  projectId: "netflix-a5529",
  storageBucket: "netflix-a5529.appspot.com",
  messagingSenderId: "470632172734",
  appId: "1:470632172734:web:f6f0f59b492981550ba2ef"
};

const app = initializeApp(firebaseConfig);

export default app;