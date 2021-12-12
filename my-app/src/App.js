import './App.css';
import Header from './components/Header';
import React from 'react';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
// 1.16.49

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
    const [tasks,setTasks] = useState([
        {
            id:1,
            text:'go to shcool',
            day:'monday',
            reminder:true,
        },
        {
            id:2,
            text:'go home',
            day:'monday',
            reminder:false,
        },
        {
          id:3,
          text:'go sleep',
          day:'monday',
          reminder:false,
      }
    ])

  //delete text
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  //toggle reminder
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task) =>
       task.id == id ? { ...task, reminder: !task.reminder } : task))
  }

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle = {toggleReminder}
      /> : 'nohting'}
    </div>
    
  )
}

export default App;
