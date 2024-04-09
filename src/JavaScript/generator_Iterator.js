//https://www.youtube.com/watch?v=IJ6EgdiI_wU&ab_channel=WebDevSimplified

function* generateId() {
    let id = 1
    while (true) {
        yield id
        id++
    }
}

const gen = generateId()
console.log(gen.next())

console.log(gen.return()) //return immediately and edit the function
console.log(gen.throw(new Error('Hi'))) //throw the error



//Iterator using generator:
function* generator(arr) {

    for (let i = 0; i < arr.length; i++) {
        yield [arr[i]]
    }
}

const gen2 = generator([1, 3, 5, 6])

console.log(gen2.next())
console.log(gen2.next())
