let countOfSymbolsCondition;
let specialCaseCondition;
let bigLetterCondition;
let smallLetterCondition;
let numberCondition;


function checkPassword() {
    let password = $('#AuthForm_password').val();
    if (password.length >= 8 && password.length <= 12) {
        $('#rull_countofSymbols').css('color', '#113946');
        countOfSymbolsCondition = true;
    } else {
        $('#rull_countofSymbols').css('color', '#BCA37F');
        countOfSymbolsCondition = false;
    }
}

function checkSpecialCase(password) {

    let hasSpecialSymbols = /[!@#$%^&*(){}+=]/.test(password);
    if (hasSpecialSymbols) {
        $('#rull_specialSymbols').css('color', '#113946');
        specialCaseCondition = true;
    } else {
        $('#rull_specialSymbols').css('color', '#BCA37F');
        specialCaseCondition = false;
    }
}
function bigletter(password) {

    let hasbigletter = /[A-Z]/.test(password);
    if (hasbigletter) {
        $('#rull_bigLetter').css('color', '#113946');
        bigLetterCondition = true;
    } else {
        $('#rull_bigLetter').css('color', '#BCA37F');
        bigLetterCondition = false;
    }
}
function smallLetter(password) {

    let hassmallletter = /[a-z]/.test(password);
    if (hassmallletter) {
        $('#rull_smallLetter').css('color', '#113946');
        smallLetterCondition = true;
    } else {
        $('#rull_smallLetter').css('color', '#BCA37F');
        smallLetterCondition = false;
    }
}
function number(password) {

    let hasnumber = /\d/.test(password);
    if (hasnumber) {
        $('#rull_number').css('color', '#113946');
        numberCondition = true;
    } else {
        $('#rull_number').css('color', '#BCA37F');
        numberCondition = false;
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


$('.AuthForm_btn').click(function(){
    let buttonClickSound = document.getElementById('AuthForm_btn_sound');
    buttonClickSound.play();

    let usernameInput = $('#AuthForm_login');
    if (!usernameInput.val()) {
        usernameInput.attr('placeholder', 'Your login here').css('border', 'rgb(174, 52, 52) 3px solid');
    }else{
        usernameInput.attr('placeholder', 'Your login here').css('border', '#BCA37F 3px solid');
    }


    let usernameInput2 = $('#AuthForm_password');
    if (!usernameInput2.val()) {
        usernameInput2.attr('placeholder', 'Your password here').css('border', 'rgb(174, 52, 52) 3px solid');
    }else{
        usernameInput2.attr('placeholder', 'Your password here').css('border', '#BCA37F 3px solid');
    }


    if(countOfSymbolsCondition == true && specialCaseCondition == true && bigLetterCondition == true && smallLetterCondition == true && numberCondition == true){
        $('.AuthForm_dataContainer').css('display','none')
        $('.AuthForm_AccountContainer').css('display', 'flex')
    }else{
        if (!countOfSymbolsCondition) {
            $('#rull_countofSymbols').css('color', 'rgb(174, 52, 52)');
        }
        if (!specialCaseCondition) {
            $('#rull_specialSymbols').css('color', 'rgb(174, 52, 52)');
        }
        if (!bigLetterCondition) {
            $('#rull_bigLetter').css('color', 'rgb(174, 52, 52)');
        }
        if (!smallLetterCondition) {
            $('#rull_smallLetter').css('color', 'rgb(174, 52, 52)');
        }
        if (!numberCondition) {
            $('#rull_number').css('color', 'rgb(174, 52, 52)');
        }
    }

})