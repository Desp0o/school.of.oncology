import React from 'react'
import "./futureProjects.css"
import esmo from "../../utils/images/siog_logo.webp"
import CardComponent from '../../components/cardComponent/CardComponent'

export default function FutureProjectsGSG() {
  return (
    <>
      <div className='future_page'>
        
            <p className='compl_proj_title'>სამომავლო პროექტები</p>

            <div className='future_cards'>
                <CardComponent cover={esmo} title="ESMO SIOG" link="/gsg/completedProjectsGSG/upcomingConferenceGSG"/>
            </div>
        
      </div>
    </>
  )
}
