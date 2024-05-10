//Confirm the ending
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-confirm-the-ending/16006

//Find the longest word
const longestWord = (str) => {
    let wordArr = str.split(' ');
    wordArr.sort((a, b) => a.length - b.length);
    return wordArr[wordArr.length - 1]
};

longestWord("What if we try a super-long word such as otorhinolaryngology");