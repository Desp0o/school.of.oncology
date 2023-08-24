import React from 'react'
import "./footer.css"
import fb from "../../utils/icons/facebook.webp"

export default function Footer() {
  return (
    <>
        <div className='footer'>
          <a href='https://www.facebook.com/groups/178935787469269' target='_blank' rel='noopener noreferrer'>
          <img src={fb} alt='facebook' className='footer_logo' />
          </a>

          <div className=''>
            <p>gsgso.info@gmail.com</p>
            <p>geo.gso.info@gmail.com</p>
          </div>

          <p className='water_mark'>© 2023 GSO-GSGO</p>
        </div>
    </>
    
  )
}
