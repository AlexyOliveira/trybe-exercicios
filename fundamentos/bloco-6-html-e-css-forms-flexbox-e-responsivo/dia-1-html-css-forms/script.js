const nome = document.getElementById('nome')
const email = document.getElementById('email')
const porque = document.getElementById('porque')
const data = document.getElementById('data')
const checkTrybe = document.getElementById('checkTrybe')
const termos = document.getElementById('termos')
const favoritePlace = document.querySelectorAll('.check')

const btnClear = document.createElement('button')
const container = document.getElementById('container')
btnClear.innerText = 'resetar formulário'
btnClear.id ='clear'
container.appendChild(btnClear)

btnClear.addEventListener('click', reset)

 function reset(params) {
     nome.value = ''
     email.value = ''
     porque.value = ''
     data.value = ''
     checkTrybe.checked = false;
     termos.checked = false;  
    
   for (let index = 0; index < favoritePlace.length; index++) {
    favoritePlace[index].checked = false;   
   } 
}



