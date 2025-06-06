let submitBtn = document.querySelector('button')
let mailInput = document.getElementById('mail')
let passwordInput = document.getElementById('password')




submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let valueOfInput = passwordInput.value;
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*]/;

    if (!minLength.test(valueOfInput)) {
        alert("Parol ən azı 8 simvoldan ibarət olmalıdır.");
    }

    if (!hasUpperCase.test(valueOfInput)) {
        alert("Parol ən azı bir böyük hərf içerməlidir.");
    }

    if (!hasLowerCase.test(valueOfInput)) {
        alert("Parol ən azı bir kiçik hərf içerməlidir.");
    }

    if (!hasNumber.test(valueOfInput)) {
        alert("Parol ən azı bir rəqəm içerməlidir.");
    }

    if (!hasSpecialChar.test(valueOfInput)) {
        alert("Parol ən azı bir xüsusi simvol (!@#$%^&*) içerməlidir.");
    }
    alert("Parol doğrudur! Form göndərilə bilər.");

})
