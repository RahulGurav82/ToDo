import AddToDo from './components/AddToDo'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
      <div className='h-screen md:h-screen p-6 md:p-16 text-gray-800 flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-8'>
        <TodoList /> 
        <AddToDo />
      </div>
    </>
  )
}

export default App