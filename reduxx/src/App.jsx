import { Provider } from "react-redux"
import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"
import { store } from "./app/store"

function App() {
  return (
   <Provider store={store}>
      <AddTodo/>
      <Todo/>
   </Provider>
  )
}

export default App
