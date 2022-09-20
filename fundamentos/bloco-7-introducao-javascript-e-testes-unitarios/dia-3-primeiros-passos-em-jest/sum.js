function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

//////////Ex: 2

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//////////Ex: 3

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

//////////Ex: 4

const vogais = ["a", "e", "i", "o", "u"];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split("");
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = letra === vogal ? code[k] : caracters[i];
    });
  });

  return caracters.join("");
}

function decode(text) {
  const caracters = text.split("");
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = caracter === num.toString() ? vogais[k] : caracters[i];
    });
  });

  return caracters.join("");
}

//////////Ex: 5

function techList(array, name) {
  if (array.length === 0) return "Vazio!";

  const arrayOrdenado = array.sort();

  const listaTech = [];

  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    listaTech.push({
      tech: arrayOrdenado[index],
      name: name,
    });
  }

  return listaTech;
}

//////////Ex: 6

function hydrate(numeroBebida) {
  let numeroBebidas = 0;
  for (let index = 0; index < numeroBebida.length; index++) {
    if (parseInt(numeroBebida[index])) {
      numeroBebidas += parseInt(numeroBebida[index]);
    }
  }
  if (numeroBebidas === 1) {
    return `${numeroBebidas} copo de água`;
  }
  return `${numeroBebidas} copos de água`;
}
// implemente seus testes aqui

console.log(hydrate("1 "));

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};
