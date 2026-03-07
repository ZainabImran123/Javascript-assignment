var mainContent = document.getElementById("main-content")
console.log(mainContent);

var childElements = mainContent.children
for(var i = 0; i < childElements.length; i++){
    console.log(childElements[i]);
}

var render = document.getElementsByClassName("render")
console.log(render);
for(var i = 0; i<render.length; i++){
    console.log(render[i].innerHTML + "br");
    
}

var first = document.getElementById("first-name").value = "Alex"
console.log(first);

var last = document.getElementById("last-name").value = "Bank"
console.log(last);

var email = document.getElementById("email").value = "alexbank@example.com"
console.log(email);





var formContent = document.getElementById("form-content")
console.log(formContent.nodeType);

var lastName = document.getElementById("lastName")
console.log(lastName.nodeType);
console.log(lastName.firstChild.nodeType);

console.log(mainContent.firstChild);
console.log(mainContent.lastChild);

console.log(lastName.nextElementSibling);
console.log(lastName.previousElementSibling);

var emailInput = document.getElementById("email")
console.log(emailInput.parentNode);
console.log(emailInput.nodeType);
