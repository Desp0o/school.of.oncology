import React from 'react'
import "./futureProjects.css"

import CardComponent from '../../components/cardComponent/CardComponent'

export default function FutureProjectsGSG() {
  return (
    <>
      <div className='future_page'>
        
            <p className='compl_proj_title'>სამომავლო პროექტები</p>

            <div className='future_cards'>
                <CardComponent cover={''} title="ESMO SIOG" link="/pages/gsg/completedProjectsGSG/upcomingConferenceGSG"/>
            </div>
        
      </div>
    </>
  )
}
