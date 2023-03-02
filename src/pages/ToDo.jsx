import React, { useState } from 'react';
import Form from '../components/Form';
import TodoS from '../components/TodoS';

function ToDo() {

  const [tasks, setTasks] = useState([]);

  const [formInput, setFormInput] = useState('');

  const handleChange = (e) => {
    setFormInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formInput !== '') {
      const date = new Date().toLocaleDateString()
      const newTask = {
        date: date,
        task: formInput,
        completed: false
      }
      setTasks([...tasks, newTask])
      setFormInput('')
      
    }
  }

  const handleComplete = (index) => {
    let el = document.getElementById('check' + index);
    const newTasks = [...tasks]
    if (newTasks[index].completed === false) {
      el.style.textDecoration = 'line-through';
      el.style.color = 'grey';
      newTasks[index].completed = true;
    } else {
      el.style.textDecoration = null ;
      el.style.color = null ;
      newTasks[index].completed = false;
    }
    setTasks(newTasks)

  }

  const handleRemove = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const handleRemoveAll = () => {
    setTasks([])
  }

  return (
    <>
    <div className='main_todo'>
      <p className='p'>Your free todo list with which you can focus on your tasks.<br/>
                      📑Write down your goals for the near future. But alas, 
                       if you refresh the page, everything will be deleted. 
      </p>
    </div>
    <div className="Todo">
        <div className='FORM_TODO'>
      <Form formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoS tasks={tasks} handleComplete={handleComplete} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} />
        </div>
    </div>
    </>
  );
}

export {ToDo}