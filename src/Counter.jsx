import { useState } from "react";
function Counter(){
    // let [stateVariable,setstateVariable] = useState(0);
    let[count,setCount] = useState(0)
    function increaseCount(){
        setCount(count+1);
        console.log(count);
    }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}
export default Counter;