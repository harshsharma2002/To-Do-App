import React, { useEffect } from 'react'
import { todo_list } from '../atoms/todo_list'
import axios from 'axios'
import { useRecoilState } from 'recoil'


function listdata() {
    const [todos,settodos] = useRecoilState(todo_list);
    const handleclick = (e) =>{
        const parent = e.target.parentNode.id;
        axios.post('http://localhost:3001/deletetodo',{"id": parent});
        del(parent);
    }

    function del(parent){
        const list = todos.filter((todo) => todo.id!=parent);
        list.map( d => {
            console.log(d);
        })
        settodos(list);
    }

    const handleclear = () => {
        axios.post('http://localhost:3001/clear',{});
        settodos([]);
    }

  return (
        <div className='w-96 h-[70%] p-4 border-mud border-2 mt-4 rounded-lg shadow-2xl flex flex-col items-center bg-teagreen'>
            <div className='w-full h-[90%] overflow-y-scroll p-2'>
                {
                    todos.map( d =>{
                        return(
                            <div key={d.id} id={d.id} className='w-full flex flex-col my-3 border-2 border-mud rounded-xl bg-leafgreen p-2'>
                                <p className='text-lg'>Title: {d.Title}</p>
                                <p className='text-lg'>Description: {d.Description}</p>
                                    <button className='bg-wood px-2 py-1 w-18 h-8 rounded-xl mt-4' onClick={handleclick}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <button className='bg-wood px-4 py-2 w-48 h- 8 rounded-xl mt-4' onClick={handleclear}>Clear all ToDo's</button>
        </div>
  )
}

export default listdata