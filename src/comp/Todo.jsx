import React, { useState } from 'react'
import '../css/Todo.css'
import { GrUpdate } from "react-icons/gr";
import { FaDeleteLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todoSlice';
import { FaCheck } from "react-icons/fa";

function Todo({ todo }) {

  const dispatch = useDispatch()

  const { id, content } = todo
  const [edit, setEdit] = useState(false)
  const [newTodo, setNewTodo] = useState(content)

  const removeTodo = () => {
    dispatch(deleteTodo(id))
  }


  const updateTodoo = () => {
    const payload = {
      id: id,
      content: newTodo
    }
    dispatch(updateTodo(payload))
    setEdit(false)
  }

  return (
    <div className='todo'>
      {
        edit ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='new-input' type="text" /> : <p>{content}</p>
      }

      <div className='icons'>

        {
          edit ? <FaCheck onClick={updateTodoo} className='update check' /> : <GrUpdate onClick={() => setEdit(true)} className='update' />
        }
        <FaDeleteLeft onClick={removeTodo} className='delete' />
      </div>
    </div>
  )
}

export default Todo