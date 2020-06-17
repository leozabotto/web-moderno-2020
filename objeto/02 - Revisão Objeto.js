// coleção dinâmida de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco // excluindo atributo
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Leo',
        idade: 18,
        endereco: {
            logradouro: 'Rua ABC',
            numero: '321'
        }
    },
    condutores: [{
        nome: 'Nanda',
        idade: 20
    }, {
        nome: 'Ju',
        idade: 18
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)