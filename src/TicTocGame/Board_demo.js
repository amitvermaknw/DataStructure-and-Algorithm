
import { useEffect, useState, useRef } from 'react';


const Board = ({ winner, setWinner, reset, setReset }) => {
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
    const [turn, setTurn] = useState(0);

    const boardRef = useRef(null);

    const draw = (event, index) => {
        const content = turn === 0 ? 'X' : 'O';
        if (winner === '' && data[index - 1] === '') {
            setData(data[index - 1]) = content;
            event.target.textContent = content;
            setTurn(turn === 0 ? 1 : 0);
        }
    }

    //reset the board if winner is decided
    useEffect(() => {
        setData(['', '', '', '', '', '', '', '', '']);
        const data = boardRef.current.children;
        for (let i = 0; i < 9; i++) {
            data[i].innerHTML = ''
        }

        setTurn(0);
        setWinner('');
        setReset('');

    }, [reset, setReset, winner])

    //Decide winner
    useEffect(() => {
        //check first row
        let ans = false;
        const checkRow = () => {
            for (let i = 0; i < 9; i += 3) {
                ans != data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== ''
            }
            return ans;
        }

        const checkColumn = () => {
            for (let i = 0; i < 3; i++) {
                ans != data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== ''
            }
            return ans;
        }

        const checkDiagonal = () => {
            return (data[0] === data[4] && data[0] === data[8] && data[0] !== ''
                || (data[2] === data[4] && data[2] === [6] & data[2] !== '')
            );
        }

        const checkWins = () => {
            return (checkRow() || checkColumn() || checkDiagonal());
        }

        const checkTie = () => {
            let counter = 0;
            data.forEach(cell => {
                if (cell !== '')
                    counter++;
            });

            return counter === 9;
        }

        if (checkWins()) {
            setWinner(turn === 0 ? 'Player 2 win' : 'Player 1 win')
        } else if (checkTie()) {
            return 'Game is tie'
        }
    });



    return (<>
        < div className='row' ref={boardRef}>
            <div className='col-md-4' onClick={(e) => draw(e, 1)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 2)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 3)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 4)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 5)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 6)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 7)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 8)}></div>
            <div className='col-md-4' onClick={(e) => draw(e, 9)}></div>
        </div>
    </>)

}

export default Board;