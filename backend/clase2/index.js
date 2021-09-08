function counter() {
    let x = 0
    return function(){
        x += 1
        return x 
    }
}

const newCounter = counter()
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
