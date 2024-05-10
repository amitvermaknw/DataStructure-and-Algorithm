let sum = 0;

function addDigits(n) {
    if (n === 0) return n
    sum = sum + Math.floor(n % 10);
    n = Math.floor(n / 10);
    addDigit(n)
    return sum
}

console.log("output", addDigit(123))