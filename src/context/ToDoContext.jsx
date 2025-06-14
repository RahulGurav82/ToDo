import { createContext, useEffect, useState } from "react";

export const ToDoContext = createContext();

const CounterProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    const storeTodos = localStorage.getItem("todos");
    return storeTodos ? JSON.parse(storeTodos) : [];
  });

  const [editedIndex, setEditedIndex] = useState(null);

  const [inputData, setInputData] = useState([
    {
      title: "",
      description: "",
      date: "",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <ToDoContext.Provider
      value={{
        inputData,
        setInputData,
        todoList,
        setTodoList,
        editedIndex,
        setEditedIndex,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default CounterProvider;
