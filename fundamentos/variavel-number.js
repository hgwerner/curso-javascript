//Tipos em Javascript: Number
const peso1 = 1.0
const peso2 = Number("2.0")
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.856
const avaliacao2 = 6.876
const resultado = avaliacao1 * peso1 + avaliacao2 * peso2
const media = resultado / (peso1 + peso2)
console.log('Media = ', media)

//exibir apenas 2 casas decimais
console.log('Media = ', media.toFixed(2))

//retornar o valor como String
console.log(media.toFixed())
console.log(typeof media.toString())

//retorna o valor como binario
console.log(media.toString(2))

console.log(typeof(media))
console.log(typeof media)
console.log(typeof Number)