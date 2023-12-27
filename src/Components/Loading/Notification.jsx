import React from 'react'
import '../Loading/Notification.css';
import { useState } from 'react';


import { IoCloseCircleSharp } from "react-icons/io5";


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
          <div onClick={()=>{setShow(false)}}><IoCloseCircleSharp className='close' /></div>
        </div>
      </div>

    </>
  )
}


