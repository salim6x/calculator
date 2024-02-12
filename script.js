// all let or const 
let string=''
const buttons=document.querySelectorAll('.button')
const input=document.querySelector('#input-js')
//here i make buttons into array & use foreach loop
Array.from(buttons).forEach((button)=>{
    //i add eventlistener on button
    button.addEventListener('click',(e)=>{
        // condition for evaluate calculation
        if (e.target.innerHTML=='='){
            string=eval(string)
            input.value=string
        }
        //condition for all clear
        else if (e.target.innerHTML=='AC'){
            string=''
            input.value=string
        }
        //condition for clear frist number
        else if (e.target.innerHTML=='DE'){
            string=string.slice(0,-1)
            input.value=string
        } 
        //condition for defult
        else {
        string=string+e.target.innerHTML
        input.value=string}
    })
    
})

