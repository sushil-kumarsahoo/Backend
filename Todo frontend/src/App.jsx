 
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'
import { useState } from 'react'

function App() {

const[todos, setTodos] = useState([]);

  return (
   <div>
    <CreateTodo/>
    <Todos todos={todos}/>
   </div>
  )
}

export default App
