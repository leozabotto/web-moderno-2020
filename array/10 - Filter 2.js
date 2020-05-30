// Implementando nosso próprio filter

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

/*console.log(produtos.filter(function(p) {
    return p.fragil
}).filter(function(p){
    return p.preco > 1000
}))*/

Array.prototype.filter2 = function(callback) {
    const resultante = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resultante.push(this[i])
        }
    }
    return resultante
}

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

//console.log(produtos.filter(caro).filter(fragil))

console.log(produtos.filter2(caro))

// Arrow Functions são interessantes para passar como parâmetro