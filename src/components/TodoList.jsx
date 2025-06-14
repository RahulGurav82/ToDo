import React, { useContext, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { ToDoContext } from "../context/ToDoContext";

const TodoList = () => {
  const {
    todoList,
    setTodoList,
    setInputData,
    setEditedIndex,
    setChecked,
    checked,
  } = useContext(ToDoContext);

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((todo) => {
      return todo.title !== id;
    });

    setTodoList(newTodo);
  };

  const editTodo = (index) => {
    setInputData(todoList[index]);
    setEditedIndex(index);
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].completed = !todoList[index].completed;
    setTodoList(updatedTodos);
  };

  return (
    <>
      <div className="md:w-96 w-80 h-full p-4 border-amber-950 border-2 rounded-2xl">
        <h1 className="font-bold mb-4 text-2xl">To-Do List</h1>
        <div className="flex items-center justify-between gap-6">
          <div>
            <h1 className="font-[600] text-xl mb-2">My Tasks</h1>
            <p className="font-medium text-[13px]">
              You Have {todoList.length} task Left
            </p>
          </div>
          <button className="cursor-pointer py-2 px-12 bg-gray-800 rounded-xl text-white font-bold text-[15px]">
            Add Task
          </button>
        </div>
        <div className="w-full h-full mt-4 flex flex-col gap-4 overflow-hidden">
          {todoList &&
            todoList.map((todo, index) => {
              return (
                <div
                  key={index}
                  className="w-full p-2 border-2 border-black rounded-2xl flex justify-between"
                >
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        className="cursor-pointer h-4 w-4 accent-gray-800"
                        onClick={() => toggleCompleted(index)}
                      />
                    </div>
                    <div>
                      <p
                        className={`${
                          todo.completed ? "line-through opacity-60" : null
                        }font-semibold text-lg`}
                      >
                        {todo.title}
                      </p>
                      <p className="font-semibold text-[14px] mt-2">
                        {todo.description}
                      </p>
                      <p className="text-red-400">{todo.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <Pencil onClick={() => editTodo(index)} />
                    <Trash2 onClick={() => deleteTodo(todo.title)} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
