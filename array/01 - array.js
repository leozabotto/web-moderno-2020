// Um array literal no JS é um Objeto, onde os seus dados são organizados a partir de
// um índice, iniciando-se no zero

console.log(typeof Array, typeof new Array, typeof [])

// No JS, um array é uma estrutura Heterogênea
// Entretanto, boa prática: trabalhar apenas com array homogêneo

// Forma válida de criar um array
let aprovados = new Array('Leo', 'Cris', 'Nildo') 
console.log(aprovados);

// Forma literal, + recomendada!
aprovados = ['Leo','Cris','Nildo']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined

// Adicionando elemento no índice [i]
aprovados[3] = 'Fernanda'

// Adiciona mais um índice ao array com respectivo valor
aprovados.push('Júlia')

// Tamanho do array
console.log(aprovados.length) 

// ELementos entre [ 5...9 [ undefined 
aprovados[9] = 'Alzira'
console.log(aprovados.length)
console.log(aprovados)

// Array em ordem alfabética (altera o array original)
aprovados.sort()
console.log(aprovados)

// Deleta (coloca undefined) no índice escolhido
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Leo','Cris','Nildo']

// Adiciona/Remove/Atualiza elementos em um array  
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2')
console.log(aprovados)