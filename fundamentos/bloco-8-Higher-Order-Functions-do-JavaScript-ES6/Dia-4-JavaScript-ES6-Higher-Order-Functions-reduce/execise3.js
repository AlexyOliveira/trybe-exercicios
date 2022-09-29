
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const expectedResult = 20;

function containsA(names) {
  const letters = names.reduce((acc, curr) => (acc += curr)).split("");

  return letters.reduce((acc, curr) => {
    if (curr === "a" || curr === "A") {
      return acc + 1;
    }
    return acc;
  }, 0);
}

console.log(containsA(names));
