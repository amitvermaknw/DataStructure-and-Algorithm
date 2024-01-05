/**
 * 1189. Maximum Number of Balloons
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
Example 1:
Input: text = "nlaebolko"
Output: 1
Example 2:
Input: text = "loonbalxballpoon"
Output: 2
 */

//balloon

var maxNumberOfBalloons = function (text) {
    let b = 0, a = 0, l = 0, n = 0, o = 0;
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'b':
                b++;
            case 'a':
                a++;
            case 'l':
                l++;
            case 'o':
                o++;
            case 'n':
                n++;
        }
    }

    const result = Math.min(b, a, Math.floor(l / 2), Math.floor(o / 2), n);
    return result;
};

console.log("maxNumberOfBalloons=", maxNumberOfBalloons('loonbalxballpoon'))