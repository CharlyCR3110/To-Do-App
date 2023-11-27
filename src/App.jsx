import { TaskItem } from './components/TaskItem'
import { TaskList } from './components/TaskList'
import { TaskCreationBar } from './components/TaskCreationBar'  // taskForm
import { useState } from 'react'

import './styles/App.css'

function App() {

  return (
    <section className='App'>
      <h1>To-Do App</h1>
      <TaskList />
    </section>
  )
}

export default App
