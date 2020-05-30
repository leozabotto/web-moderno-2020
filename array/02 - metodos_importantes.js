const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa']

// POP -> remove o último elemento no array
pilotos.pop()
console.log(pilotos)

// PUSH -> adiciona mais um elemento/posição
pilotos.push('Verstappen')
console.log(pilotos)

// SHIFT -> remove o primeiro elemento da lista
pilotos.shift()
console.log(pilotos)

// UNSHIFT -> adiciona mais um elemento/posição no início
pilotos.unshift('Fangio')
console.log(pilotos)

// SPLICE -> adiciona/remove elementos no array

// 1. adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// 2. removendo
pilotos.splice(3, 1)
console.log(pilotos)

// SLICE -> gera um novo array (pedaço) a partir de um índice [i] [ definido
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // [1..4[
console.log(algunsPilotos2)