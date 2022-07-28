import React,{ useContext } from 'react'

import { TaskContext } from './../context/TaskProvider';
import Todolist from './todolist';

export default function Todolists() {
  const {Tasks} = useContext(TaskContext)
  const listTasks = ()=>{
    const list = []
    Tasks.map(Task =>{
      return list.push(<Todolist key={Task.id} done={Task.done} id={Task.id} task={Task.task}/>)
    })
    return list 
  }
  return (
    <div className='w-96 '>
      <ul>
        {listTasks()}
      </ul>
    </div>
  )
}
