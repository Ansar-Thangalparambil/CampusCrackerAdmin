import React from 'react'

function Review(pfp) {
  return (
    <>

        <div className="review-head d-flex justify-content-between align-items-center">

            <div className='icon-title d-flex gap-2 align-items-center'>
                <div className="reviews-icon profile-btn d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="M20.61 19.19a7 7 0 0 0-2.74-10.57a8 8 0 1 0-14.19 6.29l-1.39 1.38a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 18h5.69A7 7 0 0 0 15 22h6a1 1 0 0 0 .92-.62a1 1 0 0 0-.21-1.09ZM8 15a6.6 6.6 0 0 0 .08 1H5.41l.35-.34a1 1 0 0 0 0-1.42A5.93 5.93 0 0 1 4 10a6 6 0 0 1 6-6a5.94 5.94 0 0 1 5.65 4H15a7 7 0 0 0-7 7m10.54 5l.05.05H15a5 5 0 1 1 3.54-1.46a1 1 0 0 0-.3.7a1 1 0 0 0 .3.71"/></svg>
                </div>
    
                <div className="reviews-title d-flex align-items-center">
                    <span>Reviews</span>
                </div>
            </div>

            <div className="ratings d-flex gap-1">

                <div className="star s1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"  d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/></svg>
                </div>
                <div className="star s2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"  d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/></svg>
                </div>
                <div className="star s3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"  d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/></svg>
                </div>
                <div className="star s4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"  d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/></svg>
                </div>
                <div className="star s5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round"  d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/></svg>
                </div>

            </div>

        </div>

        <div className="review-body mt-2  text-center">

            <div className='userimg-username d-flex flex-column text-center align-items-center justify-content-center '>

                <div className="review-user-img ">
                    <img src={pfp.pfp} alt="" />
                </div>
    
                <div className="rev-username d-flex align-items-center">
                    <span>deee.ke</span>
                </div>

            </div>

            <div className="review">
                <span>
                    “Fantastic! the app is very useful. lorem lipsum meinvl seuthdn osnfgfhj, skjdjkhf”
                </span>
            </div>

        </div>

        <div className="viewallbtn d-flex justify-content-end mt-2">
            <button className='px-2 py-1 d-flex gap-2 align-items-center'>
                <span className='d-flex align-items-center'>View All</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>

    </>
  )
}

export default Review