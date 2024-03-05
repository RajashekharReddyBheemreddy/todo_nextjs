import { ITask } from '@/types/tasks'
import React from 'react'
import Task from './Task'

interface TodoProps{
  tasks: ITask[]
}
const TodoList: React.FC<TodoProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr>
        <th>Task</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => (
    <Task key={task.id} task={task} />
      ))}

    </tbody>
  </table>
</div>
  )
}

export default TodoList