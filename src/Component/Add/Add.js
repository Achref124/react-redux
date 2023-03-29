import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/Actions/Actions'

const Add = () => {
    const [text,setText]= useState('')
    const dispatch = useDispatch()
    const handleAdd = () =>{
       
        
        if (text!=='') {
            dispatch(addTask({id : Math.random() , text , isDone : false}))}
        else{
            alert('cannot add empty text')
        }
    }
  return (
    <div style={{marginTop:'30px'}}>
        <Form.Control type="email" placeholder='enter Task' onChange={(e)=>setText(e.target.value)}  />
        <Button type="submit" variant='primary' style={{marginLeft:'600px'}} onClick={handleAdd} >Add Task</Button>
    </div>
  )
}

export default Add