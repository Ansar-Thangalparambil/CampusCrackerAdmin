import React from 'react'
import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <>
      <div className="totalUsers p-4 border border-dark">
        <h2>Total Users : 123</h2>
      </div>
      <div className="admTools">
        <div>
          <h3>Materials</h3>
        </div>
        <div className='gen-verb d-flex justify-content-around'>
          {/* When you want to pass data along with the route, you can use the state prop. This method is useful when you have complex data (like objects or arrays) that you don’t want to serialize in the URL.
          here we are passing a state in link to subtopicshome.jsx page  */}
         <Link to={'/subtopicshome'} state={{data:{
          route1:'/potformulas',
          route1Name:'Problems On Train - Formulas',
          route2:'/potquestions',
          route2Name:'Problems on Train - Questions'
         }}}>
            <div className="general-sec">
              <h4>General Aptitude</h4>
            </div>
         </Link>
  
          <Link to={'/subtopicshome'} state={{data:{
          route1:'/verbformulas',
          route1Name:'Verbal Reasoning - Formulas',
          route2:'/verbquestions',
          route2Name:'Verbal Reasoning - Questions'
         }}}>
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