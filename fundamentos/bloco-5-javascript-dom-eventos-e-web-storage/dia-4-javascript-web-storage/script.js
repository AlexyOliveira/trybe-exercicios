const cabecalho = document.getElementById('header')  
const btn = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')
const p = document.getElementsByTagName('p')


btn.className = 'btn'
btn2.className = 'btn'
btn3.className = 'btn'
 
   btn.addEventListener('click', recebeclick)
   function createButton1(mudaCorDeFundo) {
     cabecalho.appendChild(btn)
   btn.innerText = 'DIA'
   cabecalho.style.position = 'fixed'
   
   }
     let onOff = true
   function recebeclick(params) {
   
      const body = document.querySelector('body')
     
      if (onOff === true) {
          body.style.backgroundColor = 'black'
      body.style.color = 'white'
      btn.innerText = 'NOITE'
      onOff = false
      }else if(onOff === false) {
         body.style.backgroundColor = ''
         body.style.color = ''
         cabecalho.style.backgroundColor = ''
         btn.innerText = 'DIA'
         onOff = true
      }
      // localStorage.setItem('background',recebeclick() )
      }

      // window.onload = function(){
      //  let back =  localStorage.getItem('background')
      // //  document.body.style.backgroundColor = back
      // }
     
   //////////
   btn2.addEventListener('click', recebeclick1)
   let changeTextColor = true
   function createButton2(mudaCorDoTexto) {
    cabecalho.appendChild(btn2)
   btn2.innerText = 'MUDAR A COR DO TEXTO'
   // btn2.style.marginRight = '15px'


   }

   let corTexto = true
   function recebeclick1(params) {
    if (corTexto === true) {
      for (let index = 0; index < p.length; index++) {
         let a = p[index].style.color = 'red'
          corTexto = false
      }
    } else if (corTexto === false) {
      if (corTexto === false) {
         for (let index = 0; index < p.length; index++) {
            let a = p[index].style.color = ''
             corTexto = true
         }
      }
   }
 
   }
   


/////////////////
const container = document.getElementById('container')

btn3.addEventListener ('click', fonteMedia)

let changeFont = true;

function createButton3(mudaFonte) {
    cabecalho.appendChild(btn3)
   btn3.innerText = 'FONTE NORMAL'
   // btn3.style.marginRight = '15px'

   }

   function fonteMedia() {
      if (changeFont === true) {
         container.style.fontSize = '20px'
         btn3.innerText = 'FONTE MEDIA'
         changeFont = false
      }else if(changeFont === false) {
         btn3.innerText = 'FONTE NORMAL'
         container.style.fontSize = '16px'
         changeFont = true
      }
          
   }
   
  


createButton3()
  createButton2()
   createButton1()
    

//    const container = document.getElementById('container')