import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC83nZfyg4AClz-axPVGrZP8qwyOtCmMgE",
    authDomain: "artofspices-d70a4.firebaseapp.com",
    projectId: "artofspices-d70a4",
    storageBucket: "artofspices-d70a4.appspot.com",
    messagingSenderId: "162847643781",
    appId: "1:162847643781:web:7e7cfa018ef2ca5b87f1ec",
    measurementId: "G-R2JWSVSH12"
};

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup function

function signup_fun() { 
    var email = document.getElementById("userEmail");
    var password = document.getElementById("userPass");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    window.location.replace("file:///E:/III%20Sem/Web%20D/web%20tech%20assignment/CODE.html");
}