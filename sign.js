let submitBtn = document.querySelector('button')
let mailInput = document.getElementById('mail')
let passwordInput = document.getElementById('password')




submitBtn.addEventListener("click",(event)=>{


    if(passwordInput.value.length<5){
        alert("Your password too short")
    }

    event.preventDefault();

})

