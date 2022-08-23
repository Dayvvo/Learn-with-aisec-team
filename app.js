const submit = document.querySelector('.submit-btn');

const cancelBtn = document.querySelector('.cancelBtn');

const form = document.querySelector('form');

const signupFormContainers = document.querySelector('.signup-form-containers');

const validate = document.querySelector('.validate');

const firstName = document.querySelector('.firstName');

const lastName = document.querySelector('.lastName');

const password = document.querySelector('.password');


// const char = 'Screen';
// if(char=)



function alertMsg(e){
    e.preventDefault();
    alert(`My name is ${firstName.value} ${lastName.value}`);
}



function cancelFunc(){
    signupFormContainers.style.display = 'none';
}



function validationFunc(){
    const passwordValue = password.value;
    console.log(passwordValue);
    if((passwordValue.charAt(0) === passwordValue.charAt(0).toUpperCase()) && (passwordValue.charAt(-1) === passwordValue.charAt(-1).toUpperCase())){
        alert('Validation Passed')
    }else{
        alert('Validation Failed')
    }
}



form.addEventListener('submit', alertMsg)
validate.addEventListener('click', validationFunc)
cancelBtn.addEventListener('click', cancelFunc)