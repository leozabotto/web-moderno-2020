// Bind permite "amarrar" o this

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()