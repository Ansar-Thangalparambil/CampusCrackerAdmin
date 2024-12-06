import React from 'react'

function Footer(footLogo) {
  return (
    <div className='footer p-3 d-flex mt-1'>
      
      <div className="foot-icon d-flex align-items-center">
        <img src={footLogo.footLogo} alt="" />
      </div>

      <div className="foot-credits">
        
          <span className='brandname'>CampusCracker</span> © 2025<br /><span className='credits'>All rights reserved. Built with React.</span>
        
      </div>

    </div>
  )
}

export default Footer