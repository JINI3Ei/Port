window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
   
    var firstname = document.forms["myForm"]["firstname"];
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var birtday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var errormsg = document.getElementById("errormsg")
    errormsg.innerText = "";

    var result = true;
    if(firstname.value == "" && result == true){
        errormsg.innerText += " request your fristname,"
        result = false;
    }

    if(lastname.value == "" && result == true){
        errormsg.innerText += " request your lastname,"
        result = false;
    }
    if(gender.value == "" && result == true){
        errormsg.innerText += " request your gender,"
        result = false; 
    }
    if(birtday.value == "" && result == true){
        errormsg.innerText += " request your birtday,"
        result = false; 
    }
    if(email.value == "" && result == true){
        errormsg.innerText += " request your email,"
        result = false; 
    }
    if(username.value == "" && result == true){
        errormsg.innerText += " request your username,"
        alert("request your username")
        result = false; 
    }

    if(password[0].value != password[1].value )
    {
        errormsg.innerText += " Incorrect password,"
        alert("Incorrect password")
        result = false;
    }
    if (result == false)
    {
        return false;
    }
    
   
}