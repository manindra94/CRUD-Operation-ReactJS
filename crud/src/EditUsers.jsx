import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Editusers = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")

    let {index} = useParams()
    let navigate = useNavigate()
    console.log(index)
     
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setEmail(resp.data.salary)
            setPhone(resp.data.company)
        })
    },[])

    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let emailData=(e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    let phoneData=(e)=>{
        e.preventDefault()
        setPhone(e.target.value)
    }

    let formHandle=()=>{
        let payload={name,email,phone}
        axios.put(`http://localhost:3000/content/${index}`,payload)
        .then(()=>{
            console.log("Data has been sucessfully added")
        })
        navigate("/Users")
    }
  return (
    <div id={style.myForm}>
      <table>
        <tr>
            <th colSpan="2"><h4>Update Student Details</h4></th>
        </tr>
        <tr>
            <td><label >Name</label></td>
            <td>:<input type="text" value={name} onChange={nameData}/></td>
        </tr>
        <tr> 
            <td><label >Email id</label></td>
            
            <td>:<input type="email"  value={email} onChange={emailData}/></td>
        </tr>
        <tr>
            <td><label >Phone Number</label></td>
            <td>:<input type="number"  value={phone} onChange={phoneData}/></td>
        </tr>
        <tr>
            <th colSpan="2"><button onClick={formHandle}>Update</button></th>
        </tr>
      </table>
    </div>
  )
}

export default Editusers
