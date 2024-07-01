import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function ToDo(){
    
    let [todos,setTodos] = useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("")

    let addNewTask = () => {
        setTodos([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !=id));

    }
    let markAllDone = () => {
        setTodos((prevTodos) => 
        prevTodos.map((todo) => {
            return{
                ...todo,
               isDone:true,
            }
        })
    )
    
}
    let markAsDone = (id) => {
        setTodos((prevTodos) => 
        prevTodos.map((todo) => {
            if(todo.id == id){
                return {
                    ...todo,
                    isDone:true,
                };
            }else{
                return todo;
            }
        })
    )

}

    

    
    let styles = {
        height:"33px",
        width:"500px",
        backgroundColor:"white",
        color:"black",
        borderRadius:"10px",
       
    }
    let stylbtn = {
        backgroundColor:"red",
        
    }
    let btnStyles = {
        backgroundColor:"green",
        height:"40px",
        marginTop:"10px",
    }
    
    return (
    <div>
        <h1>Create Your ToDo List!</h1>
        <input type="text" placeholder="Add Your Task" value={newTodo} onChange={updateTodoValue} style={styles} />
        <br></br>
        <button onClick={addNewTask} style={btnStyles} >Add Task</button>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <h3>Tasks for Today:</h3>
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>
                            {todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)} style={stylbtn}><i class="fa-solid fa-xmark"></i></button>
                        <button onClick={() => markAsDone(todo.id)} style={btnStyles}><i class="fa-solid fa-check"></i></button>
                        </li>
                ))
            }
        </ul>
        <button onClick={markAllDone} style={btnStyles}>mark All as Done</button>
    </div>
    )
}