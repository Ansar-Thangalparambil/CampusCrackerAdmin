import React from 'react'

function Titlebar() {
  return (
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
  )
}

export default Titlebar