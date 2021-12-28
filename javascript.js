// configuring Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC83nZfyg4AClz-axPVGrZP8qwyOtCmMgE",
  authDomain: "artofspices-d70a4.firebaseapp.com",
  databaseURL: "https://artofspices-d70a4-default-rtdb.firebaseio.com",
  projectId: "artofspices-d70a4",
  storageBucket: "artofspices-d70a4.appspot.com",
  messagingSenderId: "162847643781",
  appId: "1:162847643781:web:7e7cfa018ef2ca5b87f1ec",
  measurementId: "G-R2JWSVSH12"
};

// initialising  Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var database = firebase.database();

function signup_fun() { 
    var email = document.getElementById("userEmail");
    var password = document.getElementById("userPass");
    auth.createUserWithEmailAndPassword(email.value, password.value).then((userCredential) =>{
    	var user = userCredential.user;
    	window.location.href = "file:///E:/III%20Sem/Web%20D/web%20tech%20assignment/CODE.html";
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

// login function

function login_fun() {
    const email = document.getElementById("Email");
    var password = document.getElementById("Password");
    auth.signInWithEmailAndPassword(email.value, password.value).then((userCredential) =>{
    	var user = userCredential.user;
    	window.location.href = "file:///E:/III%20Sem/Web%20D/web%20tech%20assignment/CODE.html";
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

function sign_out(){
firebase.auth().signOut().then(() => {
  alert("logout");
}).catch((error) => {
  // An error happened.
});
}

//function to continue without login

function continue_site() {
    window.location.href = "file:///E:/III%20Sem/Web%20D/web%20tech%20assignment/CODE.html";
}

function interlogin(){
	const user = firebase.auth().currentUser;
	if (user) {
		alert("You Are Great");
		//show('A','h','pr','e','c','hs','v');
	} else {
		window.location.href = "file:///E:/III%20Sem/Web%20D/web%20tech%20assignment/starting%20page.html";	
	}
}

// function to show a division and hide the other.

function show(shown, hd1, hd2, hd3, hd4, hd5, hd6) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hd1).style.display = 'none';
    document.getElementById(hd2).style.display = 'none';
    document.getElementById(hd3).style.display = 'none';
    document.getElementById(hd4).style.display = 'none';
    document.getElementById(hd5).style.display = 'none';
    document.getElementById(hd6).style.display = 'none';
}
// function for modal boxes
function fo(i) {
    var modal = document.getElementsByClassName("modal")[i];
    var btn = document.getElementsByClassName("myBtn")[i];
    var span = document.getElementsByClassName("close")[i];

    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none"
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}