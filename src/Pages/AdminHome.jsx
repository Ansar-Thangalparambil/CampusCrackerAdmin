import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsersAPI } from '../Services/allAPI'

function AdminHome() {

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
    <>
      <div className="totalUsers p-4 border border-dark">
        <h2>Total Users :{users.length}</h2>
      </div>
      <div className="admTools">
        <div>
          <h3>Materials</h3>
        </div>
        <div className='gen-verb d-flex justify-content-around'>
          {/* When you want to pass data along with the route, you can use the state prop. This method is useful when you have complex data (like objects or arrays) that you don’t want to serialize in the URL.
          here we are passing a state in link to subtopicshome.jsx page  */}
         <Link to={'/subtopicshome'} state={{data:[
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
         }
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
    </>
  )
}

export default AdminHome