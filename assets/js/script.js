let imageEye = document.querySelector("#imgEye")
let otherEye = document.querySelector("#otherEye")
let input = document.querySelector("#password")
let rptpassword = document.querySelector("#rptpassword")
let check = document.querySelector("#statusEqual")

imageEye.addEventListener("click", function() {
    input.type = input.type == 'text' ? 'password' : 'text'
})

otherEye.addEventListener("click", function() {
    rptpassword.type = rptpassword.type == 'text' ? 'password' : 'text'
})

function strongPassword() {
    let numbers = /([0-9])/
	let tiny = /([a-z])/
	let uppercase = /([A-Z])/
	let diferent = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

    if ($('#password').val().length < 6) {
        $('#status').html("<span style='color: #FF0000;'>Fraco, insira no mínimo 6 letras.</span>")
    } else {
        if ($('#password').val().match(numbers) && $('#password').val().match(tiny) && $('#password').val().match(uppercase) && $('#password').val().match(diferent)) {
            $('#status').html("<span style='color: #008000'>Senha forte.</span>")
        } else {
            $('#status').html("<span style='color: #FFA500'>Senha média.</span>")
        }
    }
}

function passwordEqual() {
    if (rptpassword.value === input.value) {
        check.innerHTML = "<span style='color: #008000'>As senhas são iguais</span>"
    } else {
        check.innerHTML = "<span style='color: #FF0000'>As senhas são diferentes</span>"
    }
}