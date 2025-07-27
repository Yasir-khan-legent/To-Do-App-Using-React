import './component.css'
import { useState,useEffect, useRef } from "react";

function Task() {
  const [task, settask]= useState([])  
  const [text ,settext] = useState("")
  const [edit,setedit]= useState(null)

function add(){
if(text.trim() === "") return

   if(edit !== null){
const update  = [...task];
update[edit] = text;
settask(update)
setedit(null)

   }else{
     settask([...task , text])
   }

    settext("")
}
  function delet(indexToDelete) {
    const updatedTasks = task.filter((_, index) => index !== indexToDelete);
    settask(updatedTasks);
  }
  function editing(i){
settext(task[i])
setedit(i)
  }

    return(
        <div className='main'>
            <div className='card'>
                <h1 className='heading'>To Do App</h1>
                <input className='inp' type="text" value={text} onChange={(e)=>settext(e.target.value)}  placeholder='Type Task Here' />
                <button className='add' onClick={add}>  {edit !== null ? "Update" : "Add"}</button>

                <ul className='ul'>
{task.map((item,i)=>(
    <li className='li' key={i}>{item}
     <div >
        <button className='edit' onClick={()=> editing(i)}>Edit</button>
   <button className='delete' onClick={()=> delet(i)}>Delete</button>
     </div>
    </li>
))}
                </ul>
            </div>
        </div>
    )
}


export default Task;