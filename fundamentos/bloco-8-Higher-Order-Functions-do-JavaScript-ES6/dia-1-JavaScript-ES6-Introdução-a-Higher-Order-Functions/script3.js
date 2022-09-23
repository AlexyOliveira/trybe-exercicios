const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const compareAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (rightAnswers === "N.A") {
    return 0;
  }
  return -0.5;
};

const studentPoints = (rightAnswers, studentAnswers, callback) => {
  let pointsSum = 0;
  for (let index = 0; index < rightAnswers.length; index++) {
    const result = callback(rightAnswers[index], studentAnswers[index]);
    pointsSum += result;
  }
  return pointsSum;
};

console.log(studentPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
