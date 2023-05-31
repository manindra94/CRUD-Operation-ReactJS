import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"

const CreateUser = () => {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")

  let navigate = useNavigate()

  let nameData=(e)=>{
    setName(e.target.value)
  }

  let emailData=(e)=>{
    setEmail(e.target.value)
  }
  let phoneData=(e)=>{
    setPhone(e.target.value)
  }

  let formHandle=(e)=>{
    e.preventDefault()
    let payload = {name,email, phone}
    axios.post("http://localhost:3000/content",payload)
    .then(()=>{
      console.log("DATA HAS BEEN ADDED");
    })
    .catch(()=>{
      console.log("SOMETHING IS WRONG");
    })
    navigate("/Users")
    
  }

  return (
    <div id={style.myForm}>
      <table>
        <tr>
            <th colSpan="2"><h4>User Details</h4></th>
        </tr>
        <tr>
            <td><label >Name</label></td>
            <td>:<input type="text" value={name} onChange={nameData}/></td>
        </tr>
        <tr> 
            <td><label >Email iD</label></td>
            <td>:<input type="email" value={email} onChange={emailData}/></td>
        </tr>
        <tr>
            <td><label >Phone no</label></td>
            <td>:<input type="number" value={phone} onChange={phoneData}/></td>
        </tr>
        <tr>
            <th colSpan="2"><button onClick={formHandle}>Submit</button></th>
        </tr>
      </table>
    </div>
  )
}

export default CreateUser
