// Get the modal
let loginValue = document.getElementById("unameLog")
let loginButton = document.getElementById("logbut")
let modal3 = document.getElementById('id01');
let loginstorageText = "";


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}


loginValue.addEventListener('input', (event) => {
    event.preventDefault();
    loginstorageText = event.target.value;
});

function updateValue(){
    window.sessionStorage.setItem("Username",loginstorageText);
}

