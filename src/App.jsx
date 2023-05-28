import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'

const DUMMY_TODO = [
  {
    id: nanoid,
    title: 'Belajar React',
    isCompleted: false
  }
]

function App() {
  const [todos, setTodos] = useState(DUMMY_TODO)
  const [newTodo, setNewtodo] = useState('')

  function addNewTodo(){
    const updatedTodos = [...todos]
    const objTodo = {
      id: nanoid(),
      title: newTodo,
      isCompleted: false
    }
    updatedTodos.push(objTodo)
    setTodos(updatedTodos)
    setNewtodo('')
  }
  return (
    <>
      <h1> To Do App </h1>
      <input type="text" 
      placeholder='Isi to do disini' 
      value={newTodo} 
      onChange={event => 
      setNewtodo(event.target.value)}
      /> 
      <button onClick={() => addNewTodo()} > Create </button>
      <ul>
        {
        todos.map((todo) => (
          <li key={todo.id}> {todo.title} </li>
        ))
        }
      </ul>
    </>
  )
}

export default App