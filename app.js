const submit = document.querySelector('.submit-btn');
const cancelBtn = document.querySelector('.cancelBtn');
const form = document.querySelector('form');
const signupFormContainers = document.querySelector('.signup-form-containers');
const validate = document.querySelector('.validate')
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const passwordValue = document.querySelector('.password').value;





function alertMsg(e){
    e.preventDefault();
    alert(`My first name is ${firstName.value} and my lastname is ${lastName.value}`)
}


function cancelFunc(){
    signupFormContainers.style.display = 'none';
}


function validationFunc(){
    switch (passwordValue) {
        case passwordValue[0] == passwordValue.toUppercase:
            alert('validation successful')
            break;
    
        default:
            break;
    } (passwordValue.value)
}



form.addEventListener('submit', alertMsg)
validate.addEventListener('click', validationFunc)
cancelBtn.addEventListener('click', cancelFunc)