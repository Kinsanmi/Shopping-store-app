import React from 'react'
import '../Loading/Notification.css';
import { useState } from 'react';


export const Notification = () => {

    const [show , setShow] = useState(true);
  return (
    <>
      <div className="notify" style={{display : show ? 'block' : 'none'}}>
        <div className="added">
          <div className="check-added">
            <div className="good">+</div>
            <div className="notification" >Product added successfully </div>
          </div>
          <div className='close' onClick={()=>{setShow(false)}}>X</div>
        </div>
      </div>

    </>
  )
}


