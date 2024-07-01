import { useCallback, useState } from "react"

export default function Form(){
    let [FormData,setFormData] = useState(
        {
            username:"",
            userAge:"",
            remarks:"",
            rating:5,
        }
    );
    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData,[event.target.name]:event.target.value};
        }

        )
    }
    let handleSubmit = (event) => {
        console.log(FormData)
        event.preventDefault()
        setFormData ({
            username:"",
            userAge:"",
            remarks:"",
            rating:5,
        })
    }
    

    return (
        
        <form onSubmit={handleSubmit}>
            <h4>Give your Comment!</h4>
            <label htmlFor="username">Full Name <input placeholder="Enter your name" type="text" value={FormData.username} onChange={handleInputChange} id="username" name="username"/></label>
            <br></br><br></br>
            <label htmlFor="userAge">Age: <input placeholder="Enter age" type="text" value={FormData.userAge} onChange={handleInputChange} id="userAge" name="userAge" /></label>
            <br></br><br></br>
            <label htmlFor="remark">Remarks:</label>
            <textarea value={FormData.remarks} onChange={handleInputChange} id="remarks" name="remarks">Remarks</textarea>
            <br></br><br></br>
            <label htmlFor="rating">Rating:</label>
            <input value={FormData.rating} placeholder="Rating" type="number" min={1} max={5} onChange={handleInputChange} id="ratings" name="ratings"/>
            <br></br><br></br>
            <button>Submit</button>

        </form>
    )
}