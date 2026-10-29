const form=document.createElement('form')
form.id='form'

const input=document.createElement('input')
input.id='input'
input.type='text'
input.placeholder='הכנס מספר בין 1 ל100'

const sub=document.createElement('button')
sub.id='input'
sub.type='text'


sub.addEventListener('click',
    check
)
document.body.appendChild(form)
form.appendChild(input)
form.appendChild(sub)


    let x = Math.floor(Math.random() * 100) + 1
console.log(x)

function check(){
   let guess=  Number(input.value);
    if(guess==x){
        input.style.border='3px solid green'
    }
      if(guess<x){
        input.style.border='3px solid yellow'
                input.placeholder='קטן מדי'
    }
      if(guess>x){
        input.style.border='3px solid red'
                input.placeholder='גדול מדי'
    }
}