// Criar produto

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

produto1 = criarProduto('Windows 10','R$ 799,00')
console.log(produto1)

console.log(criarProduto('iPad', '1800,00'))