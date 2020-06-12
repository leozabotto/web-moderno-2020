function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

// A diferença entre call x apply é a passadem
// dos parâmetros

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


// Call 
console.log(getPreco.call(carro, 0.17, '$'))

// Apply
console.log(getPreco.apply(carro, [0.17, '$']))
