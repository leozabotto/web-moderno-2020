// CONCAT -> concatena os arrays, transformando em um array único
// Não afeta o array original

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
const todos = filhas.concat(filhos) // Pode-se passar quantos elementos quiser,
// inclusive veriáveis

console.log(todos, filhas, filhos)

console.log(['a'].concat([1, 2], [3, 4], 5, [[6, 7]]))