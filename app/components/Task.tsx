"use client";
import { ITask } from "@/types/tasks";
import React from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <EditTask task={task} />
        <DeleteTask task={task} />
      </td>
    </tr>
  );
};

export default Task;
