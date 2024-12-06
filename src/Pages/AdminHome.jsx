import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsersAPI } from '../Services/allAPI'
import './Css/AdminHome.css'
import cclogo from '../Assets/CcLogo.png'
import pfp from '../Assets/dpcut.jpeg'
import footLogo from '../Assets/footLogo.png'
import TopPerformers from './Components/TopPerformers'
import Chart from './Components/Chart'
import Review from './Components/Review'
import Footer from './Components/Footer'

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
        <div className="row mt-3 mb-3">

          {/* Overview */}
          <div className="col-md-4 ps-4 pe-0">
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

              <div className="view-all-users-btn p-2 px-3 d-flex justify-content-between" role='button'>
                <span>View All Users</span>
                <i class="fa-solid fa-arrow-right fs-5"></i>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="col-md-5">
            
            <Chart/>

          </div>

        </div>

        {/* Bottom row */}
        <div className="row">

          {/* General and verbal */}
          <div className="col-md-2">
            <div className="general-verbal gap-2 d-flex flex-column">
              
              {/* General Aptitude */}
              <div className="general-aptitude p-3">
                <div className="general-icon profile-btn d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" ><path fill="currentColor" d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m0-2C8.41 1 4.61 4.42 4.06 8.9L2.5 11h-.03l-.02.03c-.55.76-.62 1.76-.19 2.59c.36.69 1 1.17 1.74 1.32V16c0 1.85 1.28 3.42 3 3.87V23h11v-5.5c2.5-1.67 4-4.44 4-7.5c0-4.97-4.04-9-9-9m4.33 8.3l-1.96.51l1.44 1.46c.35.34.35.92 0 1.27s-.93.35-1.27 0l-1.45-1.44l-.52 1.96c-.12.49-.61.76-1.07.64a.91.91 0 0 1-.66-1.11l.53-1.96l-1.96.53a.91.91 0 0 1-1.11-.66c-.12-.45.16-.95.64-1.07l1.96-.52l-1.44-1.45a.9.9 0 0 1 1.27-1.27l1.46 1.44l.51-1.96c.12-.49.62-.77 1.09-.64c.49.13.77.62.64 1.1L14.9 8.1l1.97-.53c.48-.13.97.15 1.1.64c.13.47-.15.97-.64 1.09"/></svg>
                </div>

                <div className="general ">
                  <span>General Aptitude</span>
                </div>

                  {/* When you want to pass data along with the route, you can use the state prop. This method is useful when you have complex data (like objects or arrays) that you don’t want to serialize in the URL.here we are passing a state in link to subtopicshome.jsx page  */}

                <Link className='links' to={'/subtopicshome'} state={{data:datas}}>
                  <div className="view-topics-btn mt-2 p-2 px-3 d-flex justify-content-between" role='button'>
                    <span>View Topics</span>
                    <i class="fa-solid fa-arrow-right fs-5"></i>
                  </div>
                </Link>
              </div>

              {/* Verbal Reasoning */}
              <div className="verbal-reasoning p-3">
                <div className="verbal-icon  d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 13h-2v-1h2zm1.6-4.5c-.3.4-.6.8-1.1 1.1V12h-3v-1.4c-1.4-.8-1.9-2.7-1.1-4.1s2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1"/></svg>
                </div>

                <div className="verbal ">
                  <span>Verbal Reasoning</span>
                </div>

                <Link className='links' to={'/subtopicshome'} state={{data:[
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
                  <div className="verbal-view-topics-btn mt-2 p-2 px-3 d-flex justify-content-between" role='button'>
                    <span>View Topics</span>
                    <i class="fa-solid fa-arrow-right fs-5"></i>
                  </div>
                </Link>
              </div>

            </div>
          </div>

          {/* Top Performers */}
          <div className="col-md-7">

            <div className="top-performers p-3">

              <div className="top-head d-flex gap-3 align-items-center">

                <div className="perform-icon profile-btn d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-chart-simple fs-5"></i>
                </div>

                <div className="topperformers d-flex align-items-center">
                  <span>Top Performers</span>
                </div>

              </div>

                {/* Graph section */}
                <div className="row">

                    <TopPerformers pfp={pfp}/>

                </div>

                {/* <div className="row">

                  <div className="col-md-6">

                    <TopPerformers pfp={pfp}/>

                  </div>

                </div> */}


            </div>

          </div>

          {/* Review and Footer */}
          <div className="col-md-3 d-flex flex-column gap-3">
            
            {/* Reviews */}
            <div className="reviews p-3">

              <Review pfp={pfp}/>   

            </div>
            
            {/* Footer */}
            <footer>

              <Footer footLogo={footLogo}/>

            </footer>

          </div>

        </div>

      </main>
    </div>
  )
}

export default AdminHome