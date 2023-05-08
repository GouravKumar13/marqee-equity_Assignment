import React from 'react'
import AllTask from './AllTask'
import Header from './Header'

const TaskLayout = (props) => {
  return (
    <div>
    <Header/>
      <AllTask {...props}/>
    </div>
  )
}

export default TaskLayout
