let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

// Se atentar ao escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


// this -> global | tanto no browser quanto no  node

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

// this em função Arrow não varia de forma alguma

