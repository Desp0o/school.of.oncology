import React from 'react'
import "./futureProjects.css"
import futureCover from "../../utils/images/futureProjectGSO.webp"
import futureConfernce from "/images/Capture2.jpg"
import CardComponent from '../../components/cardComponent/CardComponent'

export default function FutureProjects() {
  return (
    <>
      <div className='future_page' style={{paddingBottom:"100px"}}>
        
            <p className='compl_proj_title'>სამომავლო პროექტები</p>

            <div className='future_cards'>
                <CardComponent height={'fit-content'} cover={futureCover} title="20.04.2024" link="/gso/featureGSO/upcomingConference"/>
                <CardComponent height={'fit-content'} cover={futureConfernce} title="02.11.2024" link="/gso/featureGSO/esmoEvent"/>
            </div>
        
      </div>
    </>
  )
}
