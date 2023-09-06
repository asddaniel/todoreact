
import Card from './components/Card'
import { useState, useEffect } from 'react'

import './App.css'

type TodoType = {
  title: string
  content: string
  id: number
  completed: boolean
}

function App() {
  
  
const [curentTodo, setCurrentTodo] = useState<TodoType>({
  title: '',
  content: '',
  id: Date.now(),
  completed: false
})
const [todos, settodo] = useState<{title: string, content: string, completed: boolean, id: number}[]>([])
const handleTodo = () => {
  const currentTodo = todos.find(todo => todo.id === curentTodo.id);
  if(currentTodo) {
    const newTodos = todos
    newTodos[curentTodo.id] = curentTodo
    settodo([...todos.filter(todo => todo.id !== curentTodo.id), curentTodo])
    setCurrentTodo({
      title: '',
      content: '',
      id: Date.now(),
      completed: false
      })
    return
  }
  settodo([...todos, curentTodo])
  setCurrentTodo({
  title: '',
  content: '',
  id: Date.now(),
  completed: false
  })
}
useEffect(() => {
    settodo(todos)
}, [todos])
const handleDelete = (id: number) => {
  settodo(todos.filter(todo => todo.id !== id))
}
const editTodo = (id: number) => {
  const cTodo = todos.find(todo=>todo.id===id)
  if(cTodo){
    setCurrentTodo(cTodo)
  }
}
  return (
    <>
    <div className="container mx-auto p-3 bg-stone-200 rounded pb-5">

      <div className="container bg-white p-2 flex justify-start rounded">
             <label htmlFor="title" className='text-start font-bold uppercase'> Titre de mon Todo</label>

             <div className="px-3"> <input type="text" name="titre" placeholder='titre du todo' className='outline-0 border-2 rounded p-3' value={curentTodo.title} onInput={(event)=>{
              setCurrentTodo({...curentTodo, title: (event.target as HTMLInputElement).value})
             }} /></div>
      </div>
      <div className="container bg-white p-2 flex justify-start">
             <label htmlFor="title" className='text-start uppercase font-bold'> Contenu de mon todo</label>
             
             <div className="px-3"> <input  type="text" name="content" value={curentTodo.content} placeholder='contenu de mon todo' className='outline-0 border-2 rounded p-3' onInput={(e)=>{
              setCurrentTodo({...curentTodo, content: (e.target as HTMLInputElement).value})
             }} /></div>
      </div>
      <div className="container bg-white p-2 flex justify-start align-itmes-center pb-5">
        <label htmlFor="completed" className='font-bold uppercase'>Completed</label>
        <input type="checkbox" name="completed" checked={curentTodo.completed} onChange={() => setCurrentTodo({...curentTodo, completed: !curentTodo.completed})} className='ml-2'/>
      </div>
      <div className="container bg-white p-2 flex justify-start">
        <button onClick={handleTodo} className="bg-blue-500 text-center outline-0 border-0 rounded-lg p-2 text-white font-bold">Enregistrer</button>
      </div>
          
        </div>
    <div className="container mx-auto bg-stone-200 p-3 rounded grid grid-cols-3 gap-2">

      

        
        {todos.map((td)=>(
          <Card {...td} edit={editTodo}   handleDelete={()=>{handleDelete(td.id)}}  key={td.id}/>
        ))}

    </div>
      
    </>
  )
}

export default App
