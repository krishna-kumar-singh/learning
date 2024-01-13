import UserContext from "./Context/UserContext"
import UserContextProvider from "./Context/UserContextProvider"
import Profile from "./component/Profile"
import Login from "./component/login"

function App() {
 return (
  <UserContextProvider>
    <Login/>
    <Profile/>
  </UserContextProvider>
 )
}

export default App
