import React, { useState } from 'react'
import './Css/Login.css'
import { admloginAPI } from '../Services/allAPI'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [userData,setUserData]=useState({
    username:"",
    password:""
  })

  const navigate = useNavigate()

  const handleadmlogin = async(e)=>{
    e.preventDefault()
    const{username,password} =userData
    if(!username || !password){
      alert("Fill the form completely")
    }
    else{
      const result = await admloginAPI(userData)
      console.log(result);

      if(result.status===200){
        sessionStorage.setItem("admin",JSON.stringify(result.data.admin))
        sessionStorage.setItem("token",result.data.token)
        alert("Succesful Login")
        setUserData(
          {
            username:"",password:""
          }

        )
        navigate('/adminhome')
      }
      else{
        alert(result.response.data)
      }
      
    }
  }

  return (
    <>
         <div className='total d-flex justify-content-center flex-column align-items-center'>
      <div className='box px-5 py-4 col-md-4'>
        
       
          
        {/* If register not exist render code below ie login page */}
        <div className="input-btn gap-3 d-flex flex-column">

          <div className="ip-fields">
            <input type="text" placeholder='Enter Your Username' onChange={(e)=>setUserData({...userData,username:e.target.value})} />
          </div>

          <div className="ip-fields">
            <input type="password" placeholder='Password' onChange={(e)=>setUserData({...userData,password:e.target.value})} />
          </div> 
          
          <div className="logbtn">
            <button onClick={handleadmlogin} className='rounded-5 d-flex justify-content-center fw-semibold py-2 w-100'>
                  LOGIN
            </button>
          </div>

          {/* <div className="yesorno d-flex justify-content-center">
            <p>Don't have an account? <Link to='/register'>SignUp</Link></p>
          </div> */}

        </div>
        
      </div>
              
    </div>
    </>
  )
}

export default Login