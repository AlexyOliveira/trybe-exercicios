const factorial = (n) => {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result = result * index;
  }
  console.log(`Esse é o fatorial ${result}`);
};

factorial(9);
