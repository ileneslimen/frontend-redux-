import { ADDPOST, DELETEPOST, EDITPOST, LIKEPOST, LOGIN } from "./types"



export const login =(user)=>{

    return {  type:LOGIN , payload:user}
}

export const addpost=(newpost)=>{

    return {type:ADDPOST,
        payload:newpost   }
}

export const editpost=(id, body)=>{
return{
    type:EDITPOST,
    body,
    id
}
}

export const deletepost=(id)=>{
    return {
        type:DELETEPOST,
        payload:id
    }
}

export const likepost=(id)=>{

    return {
        type:LIKEPOST,
        payload:id
    }
}