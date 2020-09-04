/*
    EPS - Entrada + Processamento + Saida
*/
var a = 0
let b = 1

//Evite sempre o uso de 'var'. Prefire sempre o uso de 'let'

var a = 100
b = 200     //vai dar erro. Tirar sempre 'let' para funcionar.
b = 30.99
b = 'Produto'

console.log(a, b)

//--------
//constante
const c = 30

console.log(c)
//Quanto mais constante no seu programa. Melhor para mante-lo.
//começe com constantes e se for necessario mudar para let