"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "../api";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: nanoid(),
      text: newTask,
    });
    setNewTask("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button
        className="btn btn-ghost w-full"
        onClick={() => setModalOpen(true)}
      >
        Add new Task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
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

export default AddTask;
