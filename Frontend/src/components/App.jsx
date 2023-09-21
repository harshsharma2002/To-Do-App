import React, { useEffect } from 'react'
import Input from './input.jsx'
import Listempty from './listempty.jsx'
import Listdata from './listdata.jsx'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todo_list } from '../atoms/todo_list.js'
import axios from 'axios'


function App() {
  const [todos,settodos] = useRecoilState(todo_list);
  useEffect(()=>{
    axios.post('http://localhost:3001/gettodos',{})
    .then(res => {
      settodos(res.data);
      console.log(todos);
    });
  },[])

  const isTodoListEmpty = Array.isArray(todos) && todos.length === 0;
  if(isTodoListEmpty){
    return (
      <section className='w-screen h-screen flex flex-col items-center bg-leafgreen'>
        <Input />
        <Listempty />
      </section>
  )
  }
  else{
    return (
        <section className='w-screen h-screen flex flex-col items-center bg-leafgreen'>
          <Input />
          <Listdata />
        </section>
    )
  }
}

export default App