import config from "./myver"
import comp from "./components"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
            <comp.Navbar/>
                <Outlet />
            <comp.Footer/>
    </>
  )
}

export default App
