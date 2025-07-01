const form = document.getElementById("form")
form.addEventListener("submit", validate);


function validate(e) {
    e.preventDefault()
    let n = vname();
    let ve = vemail();
    let p = vpass();

    if (n && ve && p) {
        form.innerHTML = '<h2 style= "text-align:center">Submitted</h2>';
        return true;
    }
    else {
        return false;
    }
}

function vname()
{
    let name= document.getElementById("name").value;
    let nameError= document.getElementById("nameError");
    nameError.textContent = ""

      if (name === "") {
        nameError.textContent = "Name is required";
        return false;
      }

      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(name)) {
        nameError.textContent = "Letters and spaces only";
        return false;
      }
      return true;
}

function vemail()
{
    let email= document.getElementById("email").value;
    let emailError= document.getElementById("emailError");
    emailError.textContent = "";

    if (email === "") {
        emailError.textContent = "Email is required";
        return false;
      }

    let emailRegex= /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Incorrect email";
        return false;  
    }
    return true;
}

function vpass() {
    let p1=document.getElementById("password").value;
    let p2=document.getElementById("confirm").value;
    let passRegex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    passError.textContent = "";
    cError.textContent = ""
    if (p1 === "") {
        passError.textContent = "Password ke bagher kese hoga";
        return false;
      }
    if (!passRegex.test(p1)){
        passError.textContent = "leak hojayega";
        return false;
    }
    if (p2 === ""){
        passError.textContent = "confirm toh karlo";
        return false;
    }

    if (p1 != p2){
        cError.textContent = "alag kese rakhega";
        return false;
    }
    return true;
}