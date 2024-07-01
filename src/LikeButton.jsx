import { useState } from "react"

export default function LikeButton() {
    let [like,setLike]=useState(false)
    let toggleLike = () => {
        setLike(!like);

    }
    let likeStyle = {color:"red"}
    return(
        <div>
            <p onClick={toggleLike} >
                {like? (<i class="fa-solid fa-heart" style={likeStyle}></i>)
                :( <i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )

}