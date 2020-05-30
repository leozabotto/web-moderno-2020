// Implementando nosso próprio forEach

// Especificando forEach2 
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // valor, indice, array
    }
}

// Foreach -> Percorre um array
const aprovados = ['Aghata','Aldo','Daniel','Raquel']

// Função callback (valor, indice, array)
aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})
