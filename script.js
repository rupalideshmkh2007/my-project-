document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let eventName = document.getElementById("event").value;

    document.getElementById("message").innerHTML =
        "Registration successful! " + name +
        " registered for " + eventName + ".";

    document.getElementById("registrationForm").reset();

});