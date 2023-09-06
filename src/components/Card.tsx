import React, {useState} from 'react'

type expectprops = {title?:string, id?:number, content?:string, completed?:boolean, handleDelete?:(id:number)=>void, edit:(id:number)=>void} 
export default function Card( data:expectprops) {

    const [completed, setCompleted] = useState(data.completed??false)

  return (
    <div className='container px-2 py-2 bg-white rounded shadow-lg'>
        <div className='text-lg font-bold capitalize font-bold text-start'>
                {data?.title}
        </div>
        <div className="flex"><span className="px-2">Completed</span> <input className='p-2' type="checkbox" name="completed" checked={completed} onChange={() => setCompleted(!completed)} /></div>
         <div className="text-light font-light text-start pt-2">{data?.content}</div>
         <div className='flex flex-start pt-3'>
            <button className='bg-red-500 text-white px-2 py-2 rounded font-bold' onClick={()=>data?.handleDelete?data.handleDelete(data.id??0):null}>Supprimer</button>
         </div>
         <div className='flex flex-start pt-3'>
            <button className='bg-slate-500 text-white px-2 py-2 rounded font-bold' onClick={()=>{data.edit(data.id??0)}}>editer</button>
         </div>

    </div>
  )
}
