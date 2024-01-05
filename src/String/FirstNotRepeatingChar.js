/**
 *  "abacabad" --> firstNotRepeatingCharacter(s) = 'c'<br />
     "abacabaabacaba"	-->	firstNotRepeatingCharacter(s) = '_'<br />
 */
const firstNotRepeatingCharacter = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            return str.charAt(i);
        }
    }
    return '_';
}

console.log(firstNotRepeatingCharacter('abcddc'))