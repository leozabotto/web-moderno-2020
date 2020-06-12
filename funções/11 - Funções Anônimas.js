// São funções que não tem nome

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // muito usado na linguagem
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // Arrow function é sempre anônima


// Função anônima como atributo de objeto
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()
