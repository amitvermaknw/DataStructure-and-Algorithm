//"Write a function that validates a Tic-Tac-Toe grid state and returns the winner."

function getWinner(board) {

    //check row
    for (let r = 0; r < 3; i++) {
        if (board[r][0] && board[r][0] === board[r][1] && board[r][1] === board[r][2]) {
            return board[r][0];
        }
    }

    //check column
    for (let c = 0; c < 3; c++) {
        if (board[0][c] && board[0][c] === board[1][c] && board[1][c] === board[2][c]) {
            return board[0][c]
        }
    }

    //main diagonal
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0]
    }

    //anti-diagonal
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2]
    }

    return null
}