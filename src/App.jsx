import toast from 'react-hot-toast'
import AddToDo from './components/AddToDo'
import TodoList from './components/TodoList'
import { useContext } from 'react'
import { ToDoContext } from './context/ToDoContext'

const App = () => {

  const { inputData, setInputData, todoList, setTodoList, editedIndex, setEditedIndex} = useContext(ToDoContext)
  

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
      <div className='h-full md:h-screen p-6 md:p-16 text-gray-800 flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-8'>
        <TodoList handleFormData={handleFormData} /> 
        <AddToDo handleFormData={handleFormData} />
      </div>
    </>
  )
}

export default App