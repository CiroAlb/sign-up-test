const passwordBox = document.querySelector("#password-box");
const newFrase = document.createElement("div");
newFrase.style.marginLeft = "30px";  // Mueve el estilo aquí para evitar duplicación

function newFraseFunction(frase, colorFont) {
    newFrase.textContent = frase;
    newFrase.style.color = colorFont;
}

const password = document.querySelector("#password");
const verifidedPassword = document.querySelector("#verifided-password")

function validatePassword() {
    password.addEventListener('input', function(event) {
        let inputText = event.target.value;
        if (inputText === "") {
            newFraseFunction("*Fill the password", "red");
        } else if (inputText.length <= 8) {
            newFraseFunction("*Password length must be at least 8 characters", "red");
        } else if (inputText.length > 15) {
            newFraseFunction("*Password length must not exceed 15 characters", "red");
        } else {
            newFraseFunction("", "green");
        }

        firstpassword = inputText;
        verifidedPassword.addEventListener('input', function(second){
            let inputText2 = second.target.value;
            secondpassword = inputText2;
            if(firstpassword === secondpassword){
                newFraseFunction("*password correct","green");
                password.style.border = "2px solid green";
                verifidedPassword.style.border = "2px solid green";
                password.style.outlineColor = "green";
                verifidedPassword.style.outlineColor = "green";
            }else{
                newFraseFunction("*password incorrect","red");
                password.style.border = "2px solid red";
                verifidedPassword.style.border = "2px solid red";
                password.style.outlineColor = "red";
                verifidedPassword.style.outlineColor = "red";
            }
            
        })

    });

    // Asegúrate de que `newFrase` se agregue sólo una vez al DOM
    if (!passwordBox.contains(newFrase)) {
        passwordBox.appendChild(newFrase);
    }
}

validatePassword();