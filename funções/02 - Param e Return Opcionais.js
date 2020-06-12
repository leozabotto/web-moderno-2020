// No JS, os parâmetros e os retornos 
// são totalmente opcionais

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

// Prática não muito recomendada
// Pode causar bugs no sistema

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))

// Função pode se comportar de forma inadequada