import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

const ListTasks = () => {
    const [show,setShow]=useState("")
    const list = useSelector(state=> state.listReducer.listTasks)
    
  
    
    return(
        
        <div>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value="All" onClick={()=>setShow("All")}>All</Dropdown.Item>
        <Dropdown.Item value="Done" onClick={()=>setShow("Done")}>done</Dropdown.Item>
        <Dropdown.Item value="Undone" onClick={()=>setShow("Undone")}>undone</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            {show==="Done"?
            list.filter((el)=>el.isDone===true)
            .map(el => <Task Task={el} key={el.id} />)
            :show==="Undone"?
            list.filter((el)=>el.isDone===false)
            .map(el => <Task Task={el} key={el.id} />)
            :
            list?.map(el => <Task Task={el} key={el.id} />)}
        </div>
        
    )
    
}

export default ListTasks