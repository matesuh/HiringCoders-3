class Matematica {
    soma(valorA, valorB) {
        return valorA + valorB
    }
    subtracao(valorA, valorB) {
        return valorA - valorB
    }
}

var instanciaMatematica = new Matematica()

var resultadoA = instanciaMatematica.subtracao(4, 7)
var resultadoB = instanciaMatematica.soma(3, 9)

console.log(resultadoA, resultadoB)
