import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo } from "../api";
import { ITask } from "@/types/tasks";
interface TaskProps {
  task: ITask;
}
const DeleteTask: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };
  return (
    <div>
      <FiTrash2
        onClick={() => setOpenModalDeleted(true)}
        cursor="pointer"
        className="text-red-500"
        size={24}
      />
      <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
        <h3 className="text-lg">Are you sure you want to delete this task ?</h3>
        <div className="modal-action">
          <button className="btn" onClick={() => handleDeleteTask(task.id)}>
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteTask;
