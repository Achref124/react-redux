import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask, editTask } from '../../JS/Actions/Actions'

const Task = ({Task}) => {
    const dispatch =useDispatch()
    const [text,setText]=useState(Task.text)
    const [edit,setEdit]=useState(false)
   
    const handleChange=()=>{

      dispatch(editTask(Task.id,{id:Task.id , text , isDone: Task.isDone}))
      setEdit(false)
      
    }
    const handleDone=()=>{
      dispatch(doneTask(Task.id))

      
    }
    
  return (
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'30px'}}>
{!edit?<p>{text}</p>:
<Form.Control type="email" placeholder='enter Task' onChange={(e)=>setText(e.target.value)} />}

{!edit?<Button onClick={()=>setEdit(true)}>Edit</Button>:
<Button onClick={()=>handleChange()}>save</Button>}
<Button onClick={()=>dispatch(deleteTask(Task.id))}>delete</Button>
<Button onClick={()=>handleDone()}>{Task.isDone===false?<span>done</span>:<span>undone</span>}</Button>
    </div>
  )
}

export default Task