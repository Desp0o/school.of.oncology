import React from 'react'
import "./futureProjects.css"
import futureCover from "../../utils/images/futureProjectGSO.webp"
import CardComponent from '../../components/cardComponent/CardComponent'

export default function FutureProjects() {
  return (
    <>
      <div className='future_page'>
        
            <p className='compl_proj_title'>სამომავლო პროექტები</p>

            <div className='future_cards'>
                <CardComponent cover={futureCover} title="20.04.2024" link="/pages/gso/completedProjectsGSO/upcomingConference"/>
            </div>
        
      </div>
    </>
  )
}
