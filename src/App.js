
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import LoginLink from "./LoginLink";


const App=() =>{

  return(
    <div>
      <LoginLink/>

      <Routes>
        <Route path="/login" element={<Login/>}/>

        <Route path="/users" element={<Users/>}/>
      </Routes>
   
    </div>
  )
}
export default App;