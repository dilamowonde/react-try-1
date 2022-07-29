import React from 'react'

import { DispachContext } from './../context/TaskProvider'
import useForm from './../state/useForm';

function Todoform() {
  const dispatch = React.useContext(DispachContext);

  const [Input, changehandler,resethandler] = useForm();
  const handlesubmit = (e)=>{
    e.preventDefault()
    if(Input.trim()) dispatch({type:"ADD", task:Input})
    resethandler()
  }

  return (
    <div>
      <form action="" className='flex space-x-4' onSubmit={handlesubmit}>
        <div>
          <input type="text" value={Input} onChange={(e)=>changehandler(e)} className='border w-64 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded focus:outline-none p-2' placeholder='Add Todo' />
        </div>
        <button type='submit' className='bg-cyan-600 w-28 text-white p-2 rounded-lg hover:bg-cyan-700'>Add Todo</button>
      </form>
    </div>
  )
}


export default React.memo(Todoform)