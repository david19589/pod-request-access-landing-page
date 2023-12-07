const emailfield = document.getElementById("input");
const error = document.getElementById("demo");
const button = document.getElementById("button-1");
const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

button.addEventListener("click", () => {
    if (emailfield.value == ""){
        error.innerText = "Please fill the box";
        error.style.color = "white";
    
    } else if (!emailfield.value.match (regex)){
        error.innerText = "Oops! email is`nt valid";
        error.style.color = "FB3E3E";
    
    } else {
        error.innerText = "Please check your email";
        error.style.color = "lightblue";
    }
});