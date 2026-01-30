 
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'
import { useEffect, useState } from 'react'

function App() {

const[todos, setTodos] = useState([]);

useEffect( ()=> {
  fetch("http://localhost:3000/todos")
  .then(async function(res) {
    const json = await res.json();
    setTodos(json.todos);
  })
}, [])

  return (
   <div>
    <CreateTodo setTodos={setTodos}/>
    <Todos todos={todos} setTodos={setTodos}/>
   </div>
  )
}

export default App
