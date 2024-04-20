const passwordInput = document.getElementById('passwordInput');
const strengthIndicator = document.getElementById('strengthIndicator');

passwordInput.addEventListener('input', function(){
    if (passwordInput.value.trim() !== "") {
        strengthIndicator.style.display = "block";
    } else {
        strengthIndicator.style.display = "none";
    }
    const password = passwordInput.value;
    const strength = getPasswordStrength(password);
    displayStrength(strength);
});

function getPasswordStrength(password){
    if(password.length < 8)
        return 'Weak';
    else if(password.length < 12)
        return 'Medium';
    else
        return 'Strong';
}

function displayStrength(strength){
    strengthIndicator.textContent = `Password strength: ${strength}`;
    strengthIndicator.style.color = getColorForStrength(strength);
}

function getColorForStrength(strength){
    switch(strength){
        case 'Weak':
            return 'Red';
        case 'Medium':
            return 'Yellow';
        case 'Strong':
            return 'Green';
        default:
            return 'Black';
    }
}