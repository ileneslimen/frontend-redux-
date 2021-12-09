import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addpost, deletepost, likepost } from "../redux/actions"
import Edit from "./editposts"


function Home(){

const user=useSelector(state=>state.user)
const posts= useSelector(state=>state.posts)

const dispatch=useDispatch()
const [newpost, setnewpost]=useState("")
    return (
        <div>
<h1>Welcome {user.username}</h1>
<h2> add your post  </h2>
<button  onClick={()=>dispatch(addpost( { body:newpost, id:Math.random(),  userid:user.id  } ))}  >add </button>
<input type="text"   value={newpost} onChange={(e)=>setnewpost(e.target.value)}   />

{posts.map(el=>   
    <div style={{display:"flex", justifyContent:'space-around', width:"250px", marginBottom:"20px"}}  >
        {el.body}
        <button onClick= {()=>dispatch(likepost(el.id))}   style={ {  backgroundColor: el.like && "red" }}    >
            like
        </button>

        {user.id==el.userid && <div>
            <Edit el={el}   />
            <button onClick={()=>dispatch(deletepost(el.id))}   >delete</button>
            </div>}
        </div> )}
       
 
        </div>
    )
}

export default Home