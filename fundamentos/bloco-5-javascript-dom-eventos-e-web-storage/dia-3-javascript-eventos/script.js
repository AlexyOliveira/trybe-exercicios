function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  const daysWeek = document.getElementById('days')
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
  for (let index = 0; index < decemberDaysList.length; index += 1) {
     
    const li = document.createElement('li')
    // li.className = 'day'
    li.innerText = decemberDaysList[index]
    daysWeek.appendChild(li)
    li.className = 'day'
    if (decemberDaysList[index] === 24 ) {
        li.className += ' holiday'
    }else if(decemberDaysList[index] === 25){
        li.className += ' holiday friday'
    }else if (decemberDaysList[index] === 31) {
        li.className += ' holiday'
    }else if (decemberDaysList[index] === 4) {
        li.className += ' friday'
    }else if (decemberDaysList[index] === 11) {
        li.className += ' friday'
    }else if (decemberDaysList[index] === 18) {
        li.className += ' friday'
    }
    
}


 

// REQUISITO 2
  const botao = document.querySelector('.buttons-container')
  const btn = document.createElement('button')
  function holidays(buttonName) {
    
     
     btn.innerText = 'Feriados'
     botao.appendChild(btn)
     btn.id = 'btn-holiday'
}
   holidays('Feriados')


 // REQUISITO 3

 
btn.addEventListener('click', recebeClick)

 
function recebeClick() {
  
    const holidayChangeColor = document.querySelectorAll('.holiday')
    
    for (let index = 0; index < holidayChangeColor.length; index++) {
        holidayChangeColor[index].style.backgroundColor = 'yellow'
        
    }   
      
} 


// REQUISITO 4
     
  
 
const botao2 = document.querySelector('.buttons-container')
const btn2 = document.createElement('button')
function fridays(buttonName) {
  
   
   btn2.innerText = 'Sexta-feira'
   botao2.appendChild(btn2)
   btn2.id = 'btn-friday'
}
 fridays('Sexta-feira')

//REQUISITO 5

btn2.addEventListener('click', recebeClick2)

function recebeClick2() {
     const sextou = document.querySelectorAll('.friday')
     for (const key in sextou) {
        sextou[key].innerText = 'Sextou!'
    
     }      

}

//REQUISITO 6 

    // const dias = document.querySelectorAll('.day')
    
    function dayMouseOver() {
        let days = document.querySelector('#days');
        days.addEventListener('mouseover', function(event) {
          event.target.style.fontSize = '30px';
          event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
        });
      }
 
function dayMouseOut() {
    let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
    
});
}

dayMouseOver()
dayMouseOut()

 //REQUISITO 7 


 function tarefas(tarefa) {
    let task = document.querySelector('.my-tasks')
    const span = document.createElement('span')
    span.innerHTML = tarefa;
    task.appendChild(span) 
 }

 tarefas('Organizar o quarto')
 

 // REQUISITO 8 

