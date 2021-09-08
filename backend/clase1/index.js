// primera funcion
function mostChars(a){
    return 
}
// segunda funcion
function whereIsFalse(a){
    return a.indexOf(false)
}
//tercera funcion
function calc(a,b){
    const op = {
        'suma': (a,b) => a+b,
        'resta': (a,b) => a-b,
        'mult': (a,b) => a*b,
        'div': (a,b) => a/b
    }
    const [num1, num2] = a.filter(v => typeof v === 'number')
    return op[b](num1,num2)
}

// console.group

const valores = [true, 5, false, "hola", "adios", 2]

console.log(whereIsFalse(valores))