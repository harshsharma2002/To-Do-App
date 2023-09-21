import React, { useState } from 'react'
import axios from 'axios';
import { useSetRecoilState,useRecoilState } from 'recoil';
import {todo_list} from '../atoms/todo_list.js'

function input() {
    const [title,settitle] = useState('');
    const [desc,setdesc] = useState('');
    const [todo,settodo] = useRecoilState(todo_list);

    const handleSubmit = () =>{
      const data = {
        "id": Math.floor(Math.random()*1000000),
        "Title": title,
        "Description": desc
      }
      axios.post('http://localhost:3001/posttodo',data)
      .then(settodo((prevTodos) => [...prevTodos, data]))
      .then( () => {
        settitle('');
        setdesc('');
      });
    }


  return (
        <div className='w-96 h-40 border-2 border-mud mt-4 shadow-2xl rounded-lg flex flex-col items-center bg-teagreen justify-around'>
            <input className='border-2 border-mud bg-offwhite w-48 h-8 rounded-xl p-2' placeholder='ToDo Title' onChange={ (e) => {settitle(e.target.value)}}></input>
            <input className='border-2 border-mud bg-offwhite w-48 h-8 rounded-xl p-2' placeholder='Todo Description' onChange={ (e) => {setdesc(e.target.value)}}></input>
            <button className='bg-wood px-4 py-2 w-48 h- 8 rounded-xl' onClick={handleSubmit}>Add Todo</button>
        </div>
  )
}

export default input