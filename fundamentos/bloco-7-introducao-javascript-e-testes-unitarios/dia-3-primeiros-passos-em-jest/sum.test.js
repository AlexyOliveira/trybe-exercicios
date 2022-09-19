const sum = require("./sum");

describe("Exercício 1, sum", () => {
  it("retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9)
  });
  it('retorno de sum(0, 0) é 0',()=>{
    expect(sum(0, 0)).toBe(0)
  });
});
