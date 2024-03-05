import React, { FormEventHandler, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Modal } from "./Modal";
import { ITask } from "@/types/tasks";
import { editTodo } from "../api";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
}

const EditTask: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [taskEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskEdit,
    });
    setModalOpenEdit(false);
    router.refresh();
  };

  return (
    <div>
      <FiEdit
        cursor="pointer"
        className="text-blue-500"
        size={24}
        onClick={() => setModalOpenEdit(true)}
      />
      <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
        <form onSubmit={handleSubmitEditTodo}>
          <h3 className="font-bold text-lg">Edit Task</h3>
          <div className="modal-action">
            <input
              value={taskEdit}
              onChange={(e) => setTaskToEdit(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input w-full max-full"
            />
            <button type="submit" className="btn glass">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
