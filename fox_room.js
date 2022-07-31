
user_name= localStorage.getItem("user_name")
room_name= localStorage.getItem("room_name")
function send()
{
msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value ="";
}
function getData()
 { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
 { document.getElementById("output").innerHTML = ""; 
 snapshot.forEach(function(childSnapshot) 
 { childKey = childSnapshot.key; childData = childSnapshot.val();
     if(childKey != "Ralph") 
     { firebase_message_id = childKey; 
        message_data = childData;
     console.log(firebase_message_id)
     console.log(message_data)
    name_user_value = message_data ["name"]
    message_value_id = message_data ["message"]
   like_value = message_data ["like"]
  name_with_tag = "<h4>" + name_user_value + "<img class= 'user_tick' src='tick.png'> </h4>"
  message_with_tag = "<h4 class= 'message_h4'"> + message_value_id + "</h4>"
  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value= " + like_value + " onclick= 'updatelikeButton(this.id)'>"
  span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'> Like:  "+ like_value +  "</span></button>" + "<hr>"
  
  row = name_with_tag + message_with_tag + like_button + span_with_tag
  document.getElementById("output").innerHTML += row
} 
}); 
}); 
} getData();