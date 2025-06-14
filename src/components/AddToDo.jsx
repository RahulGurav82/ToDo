import { X } from "lucide-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { ToDoContext } from "../context/ToDoContext";

const AddToDo = () => {

const { inputData, setInputData, todoList, setTodoList, editedIndex, setEditedIndex} = useContext(ToDoContext)


  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setInputData((prev) => ({
        ...prev,
        [name] : value
    }));
  };

  const handleFormData = (e) => {
    e.preventDefault();
    if(editedIndex !== null) {
      const updateTodo = [...todoList];
      updateTodo[editedIndex] = inputData;
      setTodoList(updateTodo);
      setEditedIndex(null);
      toast.success("Task Updated Successfully");
    } else {
      setTodoList((prev) => [...prev, {...inputData, completed : false}]);
      toast.success("Task Added Successully")
    }


    setInputData({
        title: "",
        description: "",
        date: "",
    });
  }
 
  return (
    <>
      <div className="w-96 h-full border-amber-950 border-2 rounded-2xl">
        <div className="p-4">
          <h1 className="font-bold text-2xl">To-Do List</h1>
        </div>
        <div className="mt-4 w-full h-full rounded-t-2xl">
          <div className="flex justify-between items-center [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-4 pt-2 rounded-t-2xl">
            <h1 className="font-[600] text-xl">My Tasks</h1>
            <X className="cursor-pointer" />
          </div>
          <div className="p-4">
            <form onSubmit={handleFormData} className="space-y-4">
              <div className="">
                <label htmlFor="title" className="block mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={inputData.title}
                  onChange={handleOnChange}
                  className=" w-full outline-none border-2 rounded-lg p-2"
                  placeholder="write here.."
                  required
                />
              </div>
              <div className="">
                <label htmlFor="description" className="block mb-2">
                  Description (optional)
                </label>
                <input
                  type="text"
                  name="description"
                  onChange={handleOnChange}
                  value={inputData.description}
                  id="description"
                  className=" w-full outline-none border-2 rounded-lg p-2"
                  placeholder="write here.."
                />
              </div>
              <div className="">
                <label htmlFor="date" className="block mb-2">
                  Deadline
                </label>
                <input
                  onChange={handleOnChange}
                value={inputData.date}
                  type="date"
                  name="date"
                  id="date"
                  className=" w-full outline-none border-2 rounded-lg p-2"
                  placeholder="write here.."
                />
              </div>

              <button className="cursor-pointer w-full py-2 px-12 bg-gray-800 rounded-xl text-white font-bold text-[15px]">
                {editedIndex !== null ? "Edit Task" : "Add Task"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToDo;
