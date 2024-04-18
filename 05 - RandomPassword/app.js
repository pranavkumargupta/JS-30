const passwordBox = document.getElementById("passcode");
// const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^78)(_=+-}{][></|";
const allchars = upperCase + lowerCase + number + symbol;

function generatePassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(password.length < 12){
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }

    passwordBox.value = password;
} 


function copyPasscode(){
    passwordBox.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(passwordBox.value);
    
}

