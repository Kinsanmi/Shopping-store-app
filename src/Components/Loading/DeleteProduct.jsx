import React from 'react';

import '../Loading/Notification.css';
import { useState } from 'react';


import { IoCloseCircleSharp } from "react-icons/io5";

import { FaCheck } from "react-icons/fa6";


export const DeleteProduct = () => {
    const [show , setShow] = useState(true);

  return (
    <>
      <div className="notify" style={{display : show ? 'block' : 'none'}}>
        <div className="added">
          <div className="check-added">
            <div className="good"><FaCheck /></div>
            <div className="notification" >Product was removed from cart </div>
          </div>
          <div onClick={()=>{setShow(false)}}><IoCloseCircleSharp className='close' /></div>
        </div>
      </div>

    </>
  )
}


