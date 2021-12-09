import { ADDPOST, DELETEPOST, EDITPOST, LIKEPOST, LOGIN } from "./types";



const initialState={

    users:[{id:0, username:'abir', password:123456,image:'https://images.pexels.com/photos/3568546/pexels-photo-3568546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:1, username:'hejer', password:123456,image:'https://images.pexels.com/photos/3912572/pexels-photo-3912572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:2, username:'salma', password:123456,image:'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}],

    auth: false,
    user:{},

    posts: [{id:0, body:"firstpost" , userid:0, like:false },{id:1, body:"secondpost", userid:1, like:false },{id:2, body:"thirdpost", userid:2 , like:false }]
}
const Reducer =( state=initialState, action)=>{

   switch (action.type) {
       case LOGIN:
           
      return     {...state, auth:true,  user:action.payload}

      case ADDPOST: 
      return {...state, posts: [...state.posts,   action.payload   ] }
      case EDITPOST: 
      return {...state, posts: state.posts.map(el=>  el.id ==action.id ? {...el, body: action.body } : el  ) }
      case DELETEPOST: 
      return {...state, posts:  state.posts.filter(el=>  el.id !=action.payload  ) }
      case LIKEPOST:
          return {...state, posts: state.posts.map(el=> el.id==action.payload ?  {...el, like: ! el.like}: el   )}
   
       default:
          return state
   }
}

export default Reducer