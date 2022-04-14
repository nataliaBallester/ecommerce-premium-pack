import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJVsGAy-jAKHMs4ntDsp2gR4pP9zpMxbI",
  authDomain: "premium-pack-86680.firebaseapp.com",
  projectId: "premium-pack-86680",
  storageBucket: "premium-pack-86680.appspot.com",
  messagingSenderId: "733693524212",
  appId: "1:733693524212:web:c956214fe512b0881c06a1",
  measurementId: "G-B12TZZKLJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
  return app
}