const firebaseConfig = {
  apiKey: "AIzaSyB8FU3D8CPmYBiS_WaWYQyB1nLHlB93R-4",
  authDomain: "memechat-81609.firebaseapp.com",
  databaseURL: "https://memechat-81609-default-rtdb.firebaseio.com",
  projectId: "memechat-81609",
  storageBucket: "memechat-81609.appspot.com",
  messagingSenderId: "375045600963",
  appId: "1:375045600963:web:fd1b9f9e3f2e1f085ad476"
};

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





 function addItem(){
  item = document.getElementById("msg").value;

  firebase.database().ref("/").child(item).update({
    purpose : "adding message"
  });
}

function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        item = childKey;
    console.log("Item - " + item);
   row = "<div>#"+ item +"</div><hr>";
document.getElementById("output").innerHTML += row;
 });
});

}

getData();
addItem();

function del(){
  rem = document.getElementById("msg").value;
  item = rem;
  console.log(item);
  firebase.database().ref("/").child(item).remove();
	
}


function text(){
  console.log(document.getElementById("msg").value);
}
text();