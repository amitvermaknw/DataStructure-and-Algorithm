
function areBracketsBalanced(expr) {
    let stack = [];

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '(' || expr[i] == '[' || expr[i] == '{') {
            stack.push(expr[i]);
            console.log("stack", stack);
        }
    }

    for (let i = 0; i < expr.length; i++) {

        if (stack.length == 0)
            return false;

        let check;
        switch (expr[i]) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (stack.length == 0);
}

let expr = "([{}])";

console.log(areBracketsBalanced(expr))