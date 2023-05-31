import React from "react"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import CreateUser from "./CreateUser"
import Users from "./Users"
import Homepage from "./Homepage"
import Editusers from "./EditUsers"

const App=()=>{
    return(
        <div id="nav">
            <BrowserRouter>
            <Homepage/>
            <Routes>
                <Route path='/' element={<Users/>}/>
                <Route path='/CreateUser' element={<CreateUser/>}/>
                <Route path='/edit/:index' element={<Editusers/>}/>
            </Routes>
            </BrowserRouter> 
        </div>
    )
}

export default App