function getAnimal() {
    console.log("Lions")
}

function receivesAFunction(getAnimal) {
    getAnimal()
}

// console.log(receivesAFunction(getAnimal))

function returnsANamedFunction() {
    return function circusMoves() {
        console.log("Do a backflip...")
    }
}


function returnsAnAnonymousFunction() {
    return (num1, num2) => num1 + num2
}