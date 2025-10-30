import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

function TodoList() {

  const { todos } = useSelector((state) => state.todo)




  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      rowGap: "20px"
    }}>
      {
        todos && todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))
      }

    </div>
  )
}

export default TodoList