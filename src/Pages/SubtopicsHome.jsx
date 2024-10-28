import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SubtopicsHome() {
// calling the state we created in the link using the hook useLocation 
  const location = useLocation()
  const passedData = location.state?.data;
 
  return (
    <div className='d-flex flex-column'>
      {/* here we are calling the data passed in the link so we dont need to type the route and name of the link manually in this page  */}
    {passedData.length>0?
    passedData.map(item=>(
      <Link to={item.route} state={{data:{
        section_name:item.section_name,
        category:item.category
      }
    }}>{item.routeName}</Link>
    ))
      :
      <p>Nothing to display!</p>
    }
  </div>
  )
}

export default SubtopicsHome