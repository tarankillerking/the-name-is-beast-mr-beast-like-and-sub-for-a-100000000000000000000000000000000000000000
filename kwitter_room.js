var firebaseConfig = {
  apiKey: "AIzaSyAibUZpOzgLOdHDWo72JdDnNYdqadoxfWM",
  authDomain: "kwitter-3f0a8.firebaseapp.com",
  databaseURL: "https://kwitter-3f0a8-default-rtdb.firebaseio.com",
  projectId: "kwitter-3f0a8",
  storageBucket: "kwitter-3f0a8.appspot.com",
  messagingSenderId: "225436328327",
  appId: "1:225436328327:web:41be34d2ffa3ba052fb322",
  measurementId: "G-92THPTZTWS"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username")
document.getElementById("username").innerHTML="Welcome"+user_name+"!"
function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row

   //End code
      });});}
getData();
function logout() {
  window.location="index.html"
  localStorage.removeItem("username")
  localStorage.removeItem("room_name")
}
function redirect_to_roomname(name) {
  console.log(name)
  localStorage.setItem("room_name",name)
window.location="kwitter_page.html"

}
