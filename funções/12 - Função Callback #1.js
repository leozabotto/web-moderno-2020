// Padrão Observer (Event Handler | Listener): 
// https://www.youtube.com/watch?v=REqVImw8Wgo

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// Callback -> função (passada como parâmetro, geralmente) que é disparada de volta

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante)
