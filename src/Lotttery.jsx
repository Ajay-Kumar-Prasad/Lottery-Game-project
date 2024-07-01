import { useState } from "react";
import {sum,genTicket} from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winCondition}){
    let [ticket,setTicket] = useState(genTicket(n))
    let isWinning = winCondition(ticket)
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return(

        <div>
            <h1>Lottery Game!</h1>
            <hr></hr> 
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Get New Ticket</button>
            <h3>{isWinning && "Congratulations,you won!"}</h3>
        </div>
    )
}