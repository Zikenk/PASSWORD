const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function createPassword() {
    let passwordLength = 15;  


    // let rectangleOneEl = document.getElementById("rectangleOne")
    // rectangleOneEl.textContent = "";
    // let rectangleTwoEl= document.getElementById("rectangleTwo")
    // rectangleTwoEl.textContent="";

    let passwordBoxes = document.getElementsByClassName("password-box")

    Array.from(passwordBoxes).forEach((passwordBox) => {
        passwordBox.textContent=""
        for (let i=0; i<passwordLength;i++) {
            let randomCharacter = Math.floor(Math.random() * characters.length )
            passwordBox.textContent += characters[randomCharacter]
        }
    })

// for (let i=0; i<passwordLength;i++) {
//    let randomCharacter = Math.floor(Math.random() * characters.length )
//    let randomCharacterTwo = Math.floor (Math.random() * characters.length)
//    rectangleOneEl.textContent += characters[randomCharacter]
//    rectangleTwoEl.textContent += characters[randomCharacterTwo]
//    }

}

function copyText(event) {
    let textContent = event.target.innerText;
    navigator.clipboard.writeText(textContent)
    event.target.textContent = "password copied :)"
}

let password1Button = document.getElementById("password1")
let password2Button = document.getElementById("password2")

password1Button.addEventListener("click", copyText)
password2Button.addEventListener("click", copyText)


