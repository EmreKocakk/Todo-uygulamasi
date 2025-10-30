import { useState } from 'react'
import './App.css'
import TodoCreate from './comp/TodoCreate'
import TodoList from './comp/TodoList'

function App() {
  

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      rowGap:"70px",
      width:"100%",
      marginTop:"50px"
    }}>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
