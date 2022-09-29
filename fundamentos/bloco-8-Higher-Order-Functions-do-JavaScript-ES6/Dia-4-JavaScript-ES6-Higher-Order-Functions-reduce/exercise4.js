const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage(students, grades) {
  return students.map((student, index) => {
    return {
      name: student,
      avarage:
        grades[index].reduce((acc, curr) => {
          return acc + curr;
        }) / grades[0].length,
    };
  });
}

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];

console.log(studentAverage(students, grades));
