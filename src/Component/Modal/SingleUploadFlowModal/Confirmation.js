import React from 'react'
import successimg from "../../../images/Frame.png";
export default function Confirmation() {
  return (
 <>
 
 <div className='confirmation_page'>
        <div className='icon_area'>
          <img src={successimg} className="img-fluid" />
        </div>
        <div className='head'>
          <h3>Book uploaded successfully</h3>
        </div>
        <div className='text'>
          <p>Your changes will be reflected shortly</p>
        </div>

      </div>
 </>
  )
}
