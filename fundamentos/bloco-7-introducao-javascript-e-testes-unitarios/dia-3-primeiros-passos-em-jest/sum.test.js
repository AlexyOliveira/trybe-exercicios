const { sum, myRemove, myFizzBuzz } = require("./sum");

describe("Exercício 1, sum", () => {
  it("retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(() => sum()).toThrow();
  });
  it("a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum", () => {
    expect(() => sum()).toThrow("parameters must be numbers");
  });
});

////////////////Ex: 2

describe("Exercício 2", () => {
  it("a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

////////////////Ex: 3

describe("Exercício 3", () => {
    it("número divisível por 3 resultado esperado",()=>{
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    it("número divisível por 3 e 5 resultado esperado",()=>{
        expect(myFizzBuzz(30)).toBe('fizzbuzz');
    });
    it("número divisível por 5 resultado esperado",()=>{
        expect(myFizzBuzz(5)).toBe('buzz');
    });
});
