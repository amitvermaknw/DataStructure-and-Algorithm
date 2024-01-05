//Given a string of lower case and uppercase characters, 
//your task is to find the largest and smallest alphabet(according to ASCII values) in the string. 
//Note that in ASCII, all capital letters come before all small letters.
function largestAlphabet(str) {
    let maxChar = 'A';

    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() > maxChar.charCodeAt()) {
            maxChar = str[i];
        }
    }
    return maxChar;
}

function smallestAlphabet(a, n) {
    let min = 'z';
    for (let i = 0; i < n - 1; i++)
        if (a[i].charCodeAt() < min.charCodeAt())
            min = a[i];
    return min;
}