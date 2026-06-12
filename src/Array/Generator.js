async function* generator() {
    yield "hello"
    yield "task"
    yield "next"
    yield "token"
}

const gen = generator()

console.log(gen.next())