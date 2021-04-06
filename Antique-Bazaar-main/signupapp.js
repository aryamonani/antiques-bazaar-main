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
  const submitBTN = document.querySelector("#signup");
  
  let useremail = document.querySelector("#inputEmail4");
  let userpassword = document.querySelector("#inputPassword4");
  let useraddress = document.querySelector("#inputAddress");
  let useraddress2 = document.querySelector("#inputAddress2");
  let usercity = document.querySelector("#inputCity");
  let userstate = document.querySelector("#inputState");
  let userzip = document.querySelector("#inputZip");
  const db = firestore.collection("#sign up data");
  
  submitBTN.addEventListener('click', function () {
    let email = useremail.value;
    let password = userpassword.value;
    let address = useraddress.value;
    let address2 = useraddress2.value;
    let city = usercity.value;
    let state = userstate.value;
    let zip = userzip.value;
    
    db.doc().
    set({
      email : email,
      password : password,
      address : address,
      address2 : address2,
      city : city,
      state : state,
      zip : zip
    }).then(function () {
      console.log("data saved")
    }).catch(function (error) {
      console.log(error);
    });
  });
