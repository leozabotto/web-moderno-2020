// Foreach -> Percorre um array
const aprovados = ['Aghata','Aldo','Daniel','Raquel']

// Função callback (nome, indice, array)
aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

// Função callback arrow
aprovados.forEach(nome => console.log(nome))

// Função atribuída à var/const
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)