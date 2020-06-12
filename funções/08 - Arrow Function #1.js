// this associado ao contexto onde a
// função é escrita

// possui uma sintaxe mais enxuta

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// arrow é uma função anônima
// tem de ser armazenado para uso posterior

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = param => 'Olá' // possui um parâmetro
console.log(ola())