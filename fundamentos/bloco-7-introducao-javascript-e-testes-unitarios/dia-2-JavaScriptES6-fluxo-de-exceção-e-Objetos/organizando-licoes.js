const allLessons = {};

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

////////////Funçoes

const putNight = (modObject, key, value) => {
  return (modObject[key] = value);
};

const listKeys = (obj) => Object.keys(obj);

const objLength = () => {
  const tamanhoObj = Object.entries(lesson3).length;
  return tamanhoObj;
};

const objListValues = (obj) => Object.values(obj);

Object.assign(allLessons, { lesson1, lesson2, lesson3 });

function somaAlunos(params) {
  console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes)
 }
 
 


putNight(lesson2, "turno", "noite");
console.log(Object.entries(lesson2));
console.log(listKeys(lesson3));
console.log(objLength());
console.log(objListValues(lesson2));
console.log(allLessons);
somaAlunos()

//   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

//   Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

//   Crie uma função para mostrar o tamanho de um objeto.

//   Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

//   Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

//Oretorno deverá ser assim:

// console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
