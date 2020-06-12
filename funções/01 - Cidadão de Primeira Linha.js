// FUNÇÃO PODE SER CONSIDERADA COM UM DOS ELEMENTOS PRINCIPAIS DO JS
// Firt-Class Object (Citizens)
// Higher Oder Function
// Função como um tipo de dados


// Função Literal
function fun1() {}

// Armazenar função em variável
const fun2 = function () { }

// Armazenar em um Array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atriburo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.groupCollapsed(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

// Função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)