import React, {useState} from 'react'

export const TodoForm = (addTodo) =>{
    const [value, setValue] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value)

        setValue('')
    }

    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='¿Cuales son las tareas del dia?'
            onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Agregue la tarea</button>
        </form>
    )
}