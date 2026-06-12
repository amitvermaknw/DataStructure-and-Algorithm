var spiralOrder = function (matrix) {
    const res = [];
    let left = 0, top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let direction = 'right';

    while (left <= right && top <= bottom) {
        if (direction === 'right') {
            for (let i = 0; i <= right; i++) {
                res.push(matrix[top][i]);
            }

            top++;
            direction = 'bottom';

        } else if (direction === 'bottom') {

            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }

            right--;
            direction = 'left';

        } else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i])
            }

            bottom--;
            direction = 'top';

        } else if (direction === 'top') {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
            direction = 'right'
        }
    }

    return res;
};