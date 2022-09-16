let maiorPalavra = (frase) =>{
  let array = frase.split(" ")
  let wordLength = 0
  let result = ''

  for (const frases of array) {
    if (frases.length > wordLength) {
        wordLength = frases.length
        result = frases
        
    }
  }
  return result
}

console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'))
