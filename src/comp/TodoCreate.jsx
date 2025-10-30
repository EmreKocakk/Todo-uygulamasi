import React, { useState } from 'react'
import '../css/TodoCreate.css'
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';


function TodoCreate() {

  const dispatch = useDispatch()
  const [value, setValue] = useState('');


  const handleCreateTodo = () => {
    if (value.trim().length === 0) {
      alert("Todo Giriniz...");
      return;
    }

    const payload = {
      id: Math.floor(Math.random() * 9999),
      content: value,
    };

    dispatch(createTodo(payload));
    setValue("");
  };


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: "25px"
    }}>
      <h1>Todo Uygulaması</h1>
      <div className='todo-create'>
        <input className='input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text" placeholder='Lütfen Todo Ekleyiniz...'
        />
        <button className='add-btn' onClick={handleCreateTodo}>Todo Ekle</button>
      </div>

    </div>
  );
}

export default TodoCreate;
