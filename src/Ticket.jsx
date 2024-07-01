import TicketNum from "./TicketNum";
export default function Ticket({ticket}){
    return(<div className="ticketBox">
        <p>Ticket:</p>
        {ticket.map((num,idx) => (
            <TicketNum num={num} key={idx}/>
        )
        )}
    </div>
    )

}