function expandText(){
    var remaining = document.getElementById("remaining")
    var link = document.getElementById("link")
    // var paraText = document.getElementById("paraText")
 if(link.innerHTML == "See more"){
    remaining.style.display = "inline"
    link.innerHTML = "See less"
 }else if(link.innerHTML = "See less"){
    remaining.style.display = "none"

    link.innerHTML = "See more"
 }
}


function showData(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  document.getElementById("result").innerHTML =
    "Name: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Password: " + password;
}
