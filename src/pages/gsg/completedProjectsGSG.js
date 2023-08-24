import React from 'react'
import "./completedProjectsGSG.css"
import { gsgConferences } from '../../components/gsgDB'
import CardComponent from "../../components/cardComponent/CardComponent"

export default function CompletedProjectsGSG() {
  return (
      <>
        <div className='completed_projects'>

          <p className='compl_proj_title'>ჩატარებული პროექტები</p>

          <div className='conference_cards gsg_conferences'>
            {
              gsgConferences.map((card,index) => {
                return(
                  
                    <CardComponent 
                          link={card.link}
                          cover={card.image} 
                          title={card.title} 
                          key={index}
                          alt="conferension image"
                    />
                )
              })
            }
          </div>

        </div>
      </>
    )
}
