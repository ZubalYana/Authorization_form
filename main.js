function checkPassword() {
    let password = $('#AuthForm_password').val();
    if (password.length >= 8 && password.length <= 12) {
        $('#rull_countofSymbols').css('color', '#113946');
    } else {
        $('#rull_countofSymbols').css('color', '#BCA37F');
    }
}

function checkSpecialCase(password) {
    let hasSpecialSymbols = /[!@#$%^&*(){}+=]/.test(password);
    if (hasSpecialSymbols) {
        $('#rull_specialSymbols').css('color', '#113946');
    } else {
        $('#rull_specialSymbols').css('color', '#BCA37F');
    }
}
function bigletter(password) {
    let hasbigletter = /[A-Z]/.test(password);
    if (hasbigletter) {
        $('#rull_bigLetter').css('color', '#113946');
    } else {
        $('#rull_bigLetter').css('color', '#BCA37F');
    }
}
function smallLetter(password) {
    let hassmallletter = /[a-z]/.test(password);
    if (hassmallletter) {
        $('#rull_smallLetter').css('color', '#113946');
    } else {
        $('#rull_smallLetter').css('color', '#BCA37F');
    }
}
function number(password) {
    let hasnumber = /\d/.test(password);
    if (hasnumber) {
        $('#rull_number').css('color', '#113946');
    } else {
        $('#rull_number').css('color', '#BCA37F');
    }
}

setInterval(() => {
    let password = $('#AuthForm_password').val();
    checkPassword();
    checkSpecialCase(password); 
    bigletter(password);
    smallLetter(password);
    number(password);
}, 500);
