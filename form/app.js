var form = document.getElementById("userForm")
var card = document.getElementById("userCard")

    form.addEventListener("submit"), function(event) {
        event.preventDefault();




 var name = document.getElementById("name").value
 var fname = document.getElementById("fname").value
 var date = document.getElementById("date").value
 var email = document.getElementById("email").value
 var phone = document.getElementById("phone").value
 var number = document.getElementById("number").value
 var address = document.getElementById("address").value
 var image = document.getElementById("image").value








         document.getElementById("cardName").textContent = name;
        document.getElementById("cardfName").textContent = fname;
        document.getElementById("cardDate").textContent = "Date: " + date;
        document.getElementById("cardEmail").textContent = "Email: " + email;
        document.getElementById("cardPhone").textContent = "Phone: " + phone;
        document.getElementById("cardNumber").textContent = "Number: " + number;
        document.getElementById("cardPhone").textContent = "address: " + phone;
        document.getElementById("cardImage").textContent = "image: " + address;
        document.getElementById("cardImage").src = image;

        card.style.display = "block";
        form.reset();
    }
