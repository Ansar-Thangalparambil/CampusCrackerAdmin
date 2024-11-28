import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsersAPI } from '../Services/allAPI'
import './Css/AdminHome.css'
import cclogo from '../Assets/CcLogo.png'

function AdminHome() {

  const datas = [
    {
      route:'/potformulas',
      routeName:'Problems On Train - Formulas',
      section_name:'Arithmetic_aptitude',
      category:'PoTFormulas'
    },
    {
      route:'/generalquestions',
      routeName:'Problems on Train - Questions',
      section_name:'Arithmetic_aptitude',
      category:'PoT'
    },
    {
      route:'/generalquestions',
      routeName:'Profit and Loss',
      section_name:'Arithmetic_aptitude',
      category:'ProfitLoss'
    },
    {
      route:'/generalquestions',
      routeName:'Problems on Ages',
      section_name:'Arithmetic_aptitude',
      category:'ProblemsAges'
    },
    {
      route:'/generalquestions',
      routeName:'Time and works',
      section_name:'Arithmetic_aptitude',
      category:'TimeWorks'
    },
    {
      route:'/generalquestions',
      routeName:'Height and Distance',
      section_name:'Arithmetic_aptitude',
      category:'HeightDistance'
    }
  ]

  //function for viewing users

  const [users,setUsers] = useState([])

  const getUsers = async()=>{
    const result = await getUsersAPI()
    console.log(result.data);
    setUsers(result.data)
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div >
      {/* Title bar */}
      <div className="title-bar d-flex justify-content-between px-4 py-3">

        <div className="titles d-flex gap-2">
          <div className="title-cc ">
            <h2 className='m-0'>CampusCracker</h2>
          </div>
          <div className="title-db d-flex align-items-center">
            <h2 className='m-0'>DASHBOARD</h2>
          </div>
        </div>

        <div className="profile-btn d-flex align-items-center justify-content-center">
          <div className="icons d-flex align-items-center flex-column fs-5 mb-1">
          <i class="fa-solid fa-user mb-1"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>

      </div>

      {/* Main dashboard */}
      <main>

      {/* Top row */}
      <div className="row mt-3">
        {/* Overview */}
        <div className="col-md-4">
          <div className="overview">
            <div className="logo">
              <img src={cclogo} alt="Logo" />
            </div>

            <div className="tagline">
              <h2 className='m-0'>
              "Welcome! Inspiring academic <span>excellence</span> through structured tests and resources."
              </h2>
            </div>
          </div>
        </div>
        {/* All Users */}
        <div className="col-md-3 all-users-col">
          <div className="all-users p-3">
            <div className="users-icon profile-btn d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-users fs-5"></i>
            </div>

            <div className="total-users mt-1">
              <span>Total Users :</span>
            </div>

            <div className="user-count text-center">
              <h2 className='m-0'>
                {users.length}
              </h2>
            </div>

            <div className="view-all-users-btn p-2 d-flex justify-content-between" role='button'>
              <span>View All Users</span>
              <i class="fa-solid fa-arrow-right fs-5"></i>
            </div>
          </div>
        </div>
        {/* Pie Chart */}
        <div className="col-md-5">

        </div>
      </div>

      </main>

      <div className="admTools">
        <div className='gen-verb d-flex justify-content-around'>
          {/* When you want to pass data along with the route, you can use the state prop. This method is useful when you have complex data (like objects or arrays) that you don’t want to serialize in the URL.
          here we are passing a state in link to subtopicshome.jsx page  */}
         <Link to={'/subtopicshome'} state={{data:datas}
         }>
            <div className="general-sec">
              <h4>General Aptitude</h4>
            </div>
         </Link>
  
          <Link to={'/subtopicshome'} state={{data:[
            {
              route:'/verbformulas',
              routeName:'Verbal Reasoning - Formulas'
            },
            {
              route:'/verbquestions',
              routeName:'Verbal Reasoning - Questions'
            }
          ]
        }
        }>
            <div className="verbal-sec">
              <h4>Verbal Reasoning</h4>
    
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminHome