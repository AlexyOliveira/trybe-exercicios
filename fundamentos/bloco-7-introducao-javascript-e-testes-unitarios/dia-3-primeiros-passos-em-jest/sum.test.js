const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate
} = require("./sum");

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

describe("Exercício 2 myRemove", () => {
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

describe("Exercício 3 fizzBuzz", () => {
  it("número divisível por 3 resultado esperado", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });
  it("número divisível por 3 e 5 resultado esperado", () => {
    expect(myFizzBuzz(30)).toBe("fizzbuzz");
  });
  it("número divisível por 5 resultado esperado", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });
  it("número que não é divisível por 3 ou 5 resultado esperado", () => {
    expect(myFizzBuzz(1)).toBe(1);
  });
  it("não é um número, resultado esperado", () => {
    expect(myFizzBuzz("3")).toBe(false);
  });
});

////////////////Ex: 4

describe("Exercício 4 encode, decode", () => {
  it("encode e decode são funções", () => {
    expect(typeof encode && typeof decode).toBe("function");
  });
  it("as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    expect(encode("aeiou")).toBe("12345");
  });
  it("os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente", () => {
    expect(decode("12345")).toBe("aeiou");
  });
  it("demais letras/números não são convertidos para cada caso", () => {
    expect(encode("bcdfghjklmnpqrstvxywz")).toBe("bcdfghjklmnpqrstvxywz");
  });
  it("a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(encode("Trybe").length).toBe(5);
  });
});

//////////Ex: 5


describe("Testa a função techList", () => {
  it("Testa se a função techList é definida", () => {
    expect(techList).toBeDefined();
  });
  it("Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });
  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});

//////////Ex: 6

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

