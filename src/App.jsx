import { TaskItem } from './components/TaskItem'
import { useState } from 'react'

import './styles/App.css'

function App() {

  return (
    <section className='App'>
      <h1>To-Do App</h1>
      <TaskItem> Task 1 </TaskItem>
      <TaskItem> Task 2 </TaskItem>
    </section>
  )
}

export default App
