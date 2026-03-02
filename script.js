function checkPassword()
{
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    const resultMessage = document.querySelector('#result-message');

    if(password.value.length !== 0 || confirmPassword.value.length !== 0) 
    {
        if(password.value === confirmPassword.value)
        {
            resultMessage.textContent = 'Password match';
            resultMessage.style.color = 'green';
            password.style.border = 'solid 1px green';
            confirmPassword.style.border = 'solid 1px green';
        }
        else
        {
            resultMessage.textContent = 'Password do not match';
            resultMessage.style.color = 'red';
            password.style.border = 'solid 1px red';
            confirmPassword.style.border = 'solid 1px red';
        }
    }
    else
    {
        resultMessage.textContent = "";
        alert("Please enter your password.")
    }


}