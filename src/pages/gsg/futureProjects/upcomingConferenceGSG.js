import React from 'react'
import "./upcomingsgs.css"
import siog from "../../../utils/images/siog_logo.webp"
import euSoc from "../../../utils/images/european-society-for-medical-oncology-esmo-logo-vector.webp"

export default function UpcomingConferenceGSG() {
  return (
    <>
        <div className='upcoming'>
        <p className='compl_proj_title'>ESMO SIOG გერიატრიული პაციენტების შეფასების გაიდლაინი</p>

        <div className='upgomint_content sgs_logos'>
            <img src={siog} alt='company' className='gsgsUpcomingLogos' />
            <img src={euSoc} alt='company' className='gsgsUpcomingLogos' />
        </div>
        

        </div>
    </>
  )
}
