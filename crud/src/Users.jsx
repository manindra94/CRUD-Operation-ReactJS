import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Users = () => {
  let [data, setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/content")
     .then((response)=>{
        setData(response.data)
     })
    .catch(()=>{
      console.log("DIDNT GET");
    })
  },[])

  let deleteData=(id)=>{
    axios.delete(`http://localhost:3000/content/${id}`)
    window.location.assign("/Users")
  }
  return (
    <div id={style.myUsers}>
      {data.map((x)=>{
        return(
          <div id={style.cards}>
           <table>
            <tr>
              <th colSpan="2"><h4>Student {x.id}</h4></th>
            </tr>
            <tr>
              <td>Name</td>
              <td>:{x.name}</td>
            </tr>
            <tr>
              <td>Phone No</td>
              <td>:{x.phone}</td>
            </tr>
            <tr>
              <td>Email id</td>
              <td>:{x.email}</td>
            </tr>
            <tr>
              <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
              <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
            </tr>
           </table>
          </div>
        )
      })}     
    </div>
  )
}

export default Users
