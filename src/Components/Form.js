import React, { useState } from 'react'
import "./Form.css"
import Navbar from './Navbar'
import {useNavigate} from "react-router-dom"
export default function Form() {
  
  const[crediential,setCrediential]=useState(
    {"username" : "Abhimanyu",
     "password" : "1234"
   }
    )
    

  const[userName,setUserName]=useState()
  const[password,setPassword]=useState()
   
  console.log("user" ,crediential)
  var navigate = useNavigate()
  const handleLoginData= (e)=> {
    e.preventDefault()
    if (crediential.username=== userName && crediential.password=== password){
      navigate("/") 
    }
    
    else {
      navigate("/Form")
    }
    } 
    
  return (
    <>
       <Navbar/>
      < form onSubmit={(e)=>handleLoginData(e)} style={{marginTop:"15vh",background:"white", height:"400px"}} action="index.html" method="post">
        <h1> Filmlane </h1>
        
        <fieldset style={{ padding:"30px"}} >
          
        
          <label for="name">Username:</label>
          <input  onChange={(e) => setUserName(e.target.value)} type="text" id="name" name="user_name"/>
        
       
          <label for="password">Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} style={{backgroundColor:"cyan", padding:"15px"}} type="password" id="password"       name="user_password"/>
        
          <button className="hov" style={{margin:"auto",background:"white", border:"red 2px solid", borderRadius:"40px",padding:"10px", marginTop:"10px"}} type="submit">Log In</button>
         </fieldset>
       
        
       </form>
       
      
    

        
    </>
  )
}
