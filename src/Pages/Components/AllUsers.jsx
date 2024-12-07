import React from 'react'

function AllUsers(users) {
  return (
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
                {users.users.length}
            </h2>
            </div>

            <div className="view-all-users-btn p-2 px-3 d-flex justify-content-between" role='button'>
            <span>View All Users</span>
            <i class="fa-solid fa-arrow-right fs-5"></i>
            </div>
        </div>
    </div>
  )
}

export default AllUsers