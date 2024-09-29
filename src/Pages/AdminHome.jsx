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
         <Link to={'/subtopicshome'} >
            <div className="general-sec">
              <h4>General Aptitude</h4>
            </div>
         </Link>
  
          <Link>
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