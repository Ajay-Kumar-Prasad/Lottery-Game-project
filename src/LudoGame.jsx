import { useState } from "react";

export default function LudoGame() {
    let [moves, setMoves] = useState({blue:0,red:0,yellow:0,green:0});
    

    let updateBlue = () => {
        console.log(moves)
        setMoves({...moves, blue:moves.blue+1})
       
    }
    let updateRed = () => {
        console.log(moves)
        setMoves({...moves, red:moves.red+1})
    }
    let updateYellow = () => {
        console.log(moves)
        setMoves({...moves, yellow:moves.yellow+1})
       
    }
    let updateGreen = () => {
        console.log(moves)
        setMoves({...moves, green:moves.green+1})
       
    }
    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves:{moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Red moves:{moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>Green moves:{moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Yellow moves:{moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
    )
}