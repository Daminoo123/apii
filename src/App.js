import React, { useReducer, useState } from 'react';
import Todo from './Todo';
function App() {
  const [todos,dispatch]=useReducer(reducer,[])
  const[name,setName]=useState('')
  const ACTIONS={
    ADD_TODO:'add_todo',
    DONE:'add',
    undone:'undone'
  }
  function reducer(todos,ACTIONS){
    switch(ACTIONS.type){
      case ACTIONS.ADD_TODO:
        return [...todos,newTodo(ACTIONS.payload.name)]
      case ACTIONS.DONE:
        return {}
      case ACTIONS.undone:
        return {}
      default :
      return todos
    }
  }
  function handlesubmit(e){
    e.preventDefault()
    dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}})
    setName('')
  }
  function newTodo(name){
    return{id:Date.now(),name:name,complete:false}
  }
  console.log('hello')
  const a=1;
  console.log(a==1)
  return ( 
    <div >
      {a==0}

    </div>
  );

  }
export default App;
