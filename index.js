const toggle2=document.querySelector('.toggle2');
const section= document.querySelectorAll('h2 span')
let active=false;
toggle2.addEventListener('click',function(e){
    console.log(e.currentTarget)
    e.currentTarget.classList.toggle('complete')
    calculate()
})

function calculate(){
    if(!active){
        section.forEach(function(item){
            item.textContent=item.textContent*12
    })
    active=true

    }
    else{
        section.forEach(function(item){
            item.textContent=item.textContent/12
        })       
        active=false
        
}
}
