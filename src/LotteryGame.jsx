import { useState } from "react";
import "./LotteryGame.css"
import {sum} from "./genResult";

export default function LotteryGame(){
    let [number,setNumber] = useState({num1:0,num2:0,num3:0})
    let updateNum = () => {
        setNumber({number,num1:Math.floor(Math.random()*10),num2:Math.floor(Math.random()*10),num3:Math.floor(Math.random()*10)})
    }
    let isWinning = sum(number.num1,number.num2,number.num3) === 15;
    return(
        <div>
            <h1>Lottery Game!</h1>
            <hr></hr> 
            <div className="ticket">
                <p>Lottery Ticket:{number.num1}{number.num2}{number.num3} </p>
            </div>
            <h3>Result:{isWinning && "Congratulations,you won!"}</h3>
            <button onClick={updateNum}>Get New Ticket</button>
        </div>
    )
}
