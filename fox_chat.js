const firebaseConfig = {
    apiKey: "AIzaSyCiLUjMyD4zwLHMJhvWTXC2ObQNSrlZV_c",
    authDomain: "kwitter-86a38.firebaseapp.com",
    databaseURL: "https://kwitter-86a38-default-rtdb.firebaseio.com",
    projectId: "kwitter-86a38",
    storageBucket: "kwitter-86a38.appspot.com",
    messagingSenderId: "629067735179",
    appId: "1:629067735179:web:dad65fb2705ba9aac2b48e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("h3user_name").innerHTML="Welcome " + user_name +"!"
  
  
  
  
  function addRoom()
  {
  
  room_name= document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
  reynelle : "creating kwitter"
  });
  
  window.location= "fox_page_page.html";
  
  
  
  
  
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
      console.log("Room name - " + Room_names)
      row="<div class= 'Room name' id =" + Room_names + " onclick= 'redirectToRoomName(this.id)' > " + " # " + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML +=row
        //End code
        });});}
  getData();
  
  
  function redirectToRoomName(name)
  {
  localStorage.setItem("room_name", name);
  window.location = "fox_chat_page.html";
  }
  
  function logout()
  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }