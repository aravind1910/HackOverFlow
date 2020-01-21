var firebaseConfig = {
    apiKey: "AIzaSyAEJJ6HFUW5LqKVqdc4gb7Zus0-p_UQ740",
    authDomain: "login-auth-8d929.firebaseapp.com",
    databaseURL: "https://login-auth-8d929.firebaseio.com",
    projectId: "login-auth-8d929",
    storageBucket: "login-auth-8d929.appspot.com",
    messagingSenderId: "470268326328",
    appId: "1:470268326328:web:755d5f7bb1054bfaf69f4d",
    measurementId: "G-097V51V1HW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("Signup");

  }
  function signin(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.signInWithEmailAndPassword(email.value,password.value);
       //promise.catch(e => alert(e.message));
    auth.onAuthStateChanged(function(user){
        if(user){
            var email=user.email;
            alert("Active User "+email);
            window.location.replace('webber.html');
        }
        else{
            alert("Invalid Username or Password");
        }
  });
}
function signout(){
    auth.signOut();
    alert("Signed Out");
    window.location.replace('webber.html');
}
 