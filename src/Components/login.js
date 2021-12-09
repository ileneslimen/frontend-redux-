import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router"
import { login } from "../redux/actions"


function Login(){

    const [username,setUsername]=useState("")
    const [password,setpassword]=useState("")

    const users= useSelector(state=>state.users)
const auth =useSelector(state=>state.auth)
    const user = users.find (el=> el.username===username && el.password==password )
    console.log(user)
    const dispatch=useDispatch()

   const handleclick= (e)=>{  e.preventDefault( ) ; user &&  dispatch(login(user))  }

    return (
        <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="login-form">
            <input type="text" placeholder="username"  value={username}  onChange={(e)=> setUsername(e.target.value)}  />
            <input type="password" placeholder="password"  value={password}   onChange={(e)=> setpassword(e.target.value)}   />
              <button  onClick={handleclick}  >login</button>
              {auth ? <Navigate  to ='/home'  /> :  "you are not authorised"  }
            <p class="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    )
}
export default Login 