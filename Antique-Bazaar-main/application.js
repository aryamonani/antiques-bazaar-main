// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAcSfUaoY_FMVfUxR2A1tBAjkAxIy6bIXI",
  authDomain: "rentit-b7f0f.firebaseapp.com",
  projectId: "rentit-b7f0f",
  storageBucket: "rentit-b7f0f.appspot.com",
  messagingSenderId: "936262770902",
  appId: "1:936262770902:web:af90fa7cfbef4291ee6977"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //start grabbing DOM
  const submitBTN = document.querySelector("#login");
  
  let useremail = document.querySelector("#useremail");
  let userpassword = document.querySelector("#userpassword");
  
  const db = firestore.collection("log in data");
  
  submitBTN.addEventListener('click', function () {
    let email = useremail.value;
    let password = userpassword.value;
    
    db.doc().
    set({
      email : email,
      password : password
    }).then(function () {
      console.log("data saved")
    }).catch(function (error) {
      console.log(error);
    });
  });
  