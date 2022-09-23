const numberChecker = (myNumber, number) => {
  if (myNumber === number) {
    return "Lucky day, you won!";
  }
  return "Try Again!";
};

const lotteryResult = (myNumber, callback) => {
  return callback(myNumber, Math.floor(Math.random() * 5 + 1));
};
console.log(lotteryResult(2, numberChecker));
