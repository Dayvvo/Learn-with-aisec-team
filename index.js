const submit=document.querySelector('.submit');
const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const validate=document.querySelector('.validate');
const password=document.querySelector('#password');
const form=document.querySelector('.form');

submit.addEventListener('click',function(){
    alert(`my name is ${firstname.value }  ${lastname.value}`);

    
})

validate.addEventListener('click',function(){
    const seyi=password.value.match(/[a-z]/g);
    const ayo=password.value.match(/[0-9]/g)
    if(seyi && ayo){
        alert(`inalid password`)
    }
    if(password.value[0].toUpperCase()!==password.value[0] && password.value[ password.value.length-1].toUpperCase()!==password.value[ password.value.length-1]){
        alert(`validation failed`)
    }


    
    
    if(password.value[0].toUpperCase()===password.value[0] && password.value[ password.value.length-1].toUpperCase()===password.value[ password.value.length-1]){
        alert(`validation passed`)
    }


})







form.addEventListener('submit',function(e){

    e.preventDefault();
});




/*validate.addEventListener('click',function(){ 
    const re= /^[0-9a-zA-Z]+$/
    if(password.value.match(re)){
        alert(`invalid password`);
    }
    
    




})
*/



/*const word=`A23p`;

if(word.match(".*[a-zA-Z].*") && word.match(".*[0-9].*")){
    console.log('tolu')

}

if(password.value.charAt(0)== password.value.charAt(0).toUpperCase()){
    console.log('Kemi')
}*/

word=`tolu`;
console.log(word.slice(-1))





