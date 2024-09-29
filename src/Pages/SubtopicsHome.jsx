import React from 'react'
import { Link } from 'react-router-dom'

function SubtopicsHome() {
  return (
    <div className='d-flex flex-column'>
    <Link to={'/potformulas'}>Problems On Train - Formulas</Link>
    <Link to={'/potquestions'} >Problems on Train - Questions</Link>
  </div>
  )
}

export default SubtopicsHome