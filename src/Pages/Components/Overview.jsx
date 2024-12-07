import React from 'react'

function Overview(cclogo) {
  return (
    <div className="col-md-4 ps-4 pe-0">
        <div className="overview">
            <div className="logo">
            <img src={cclogo.cclogo} alt="Logo" />
            </div>

            <div className="tagline">
            <h2 className='m-0'>
            "Welcome! Inspiring academic <span>excellence</span> through structured tests and resources."
            </h2>
            </div>
        </div>
    </div>
  )
}

export default Overview