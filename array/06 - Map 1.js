// MAP -> mapeia um array para outro array de mesmo tamanho, com os dados modificados
// É um "For com propósito"
// Não causa modificação no array atual

const nums = [1, 2, 3, 4, 5]

// Retornando o dobro
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` // Transformando sucessivamente

resultado = nums.map(soma10).map(triplo).map(toMoney)
console.log(resultado)