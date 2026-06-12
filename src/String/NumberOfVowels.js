//Write a function to count the number of vowels in a given string. Return the count

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let s of str) {
        if (vowels.includes(s.toLowerCase())) {
            count++
        }
    }
    return count;
}