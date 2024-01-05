//Find the largest Alphabetic character present in the string in lower and upper case.
function largestAlphabet(str) {
    let lowercase = new Array(26);
    lowercase.fill(false);
    let uppercase = new Array(26);
    uppercase.fill(false);

    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            lowercase[arr[i].charCodeAt() - 97] = true;
        }

        if (arr[i] === arr[i].toUpperCase()) {
            uppercase[arr[i].charCodeAt() - 65] = true;
        }
    }

    for (i = 25; i >= 0; i--) {
        if (lowercase[i] && uppercase[i]) {
            let dataStr = String.fromCharCode(i + 'A'.charCodeAt())
            return dataStr
        }
    }

    return '-1'
}
const a = largestAlphabet("aaBabcDaA");
console.log(a)