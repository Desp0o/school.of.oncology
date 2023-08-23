import React from 'react'
import "./futureProjects.css"
import bla from "../../utils/images/conference1/con0.webp"
import CardComponent from '../../components/cardComponent/CardComponent'

export default function FutureProjects() {
  return (
    <>
      <div className='future_page'>
        
            <p className='compl_proj_title'>სამომავლო პროექტები</p>

            <div className='future_cards'>
                <CardComponent cover={bla} title="20.04.2024" link="/pages/gso/completedProjectsGSO/upcomingConference"/>
            </div>
        
      </div>
    </>
  )
}
