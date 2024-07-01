import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from "./Counter.jsx"
import LikeButton from './LikeButton.jsx'
import './App.css'
import LudoGame from './LudoGame.jsx'
import ToDo from './ToDoList.jsx'
import LotteryGame from './LotteryGame.jsx'
import Ticket from "./Ticket"
import './Ticket.css'
import Lottery from './Lotttery.jsx'
import {sum} from "./helper"
import Form from './Form.jsx'


function App() {

  let winCondition = (ticket) => { // CHANGE WINNING CONDITION HERE....
    return sum(ticket) === 15;
  }
  return(
  <>
  {/* <h3>States in React</h3>
  {/* <Counter/> */}
  {/* <LikeButton/>  */}
  {/* <LudoGame/> */}
  {/* <ToDo/> */}
  {/* <LotteryGame/> */}
    {/* <Ticket ticket={[0,1,2]}/> */}
  {/* <Lottery n={3} winCondition={winCondition}/> */}
  <Form/>
    </>
  )
}

export default App
