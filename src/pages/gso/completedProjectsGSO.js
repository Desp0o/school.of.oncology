import React from 'react'
import "./completedProjectsGSO.css"
import { gsoConferences } from '../../components/gsoDB'
import CardComponent from "../../components/cardComponent/CardComponent"

export default function CompletedProjectsGSO() {
  return (
      <>
        <div className='completed_projects'>

          <p className='compl_proj_title'>ჩატარებული პროექტები</p>

          <div className='conference_cards'>
            {
              gsoConferences.map((card,index) => {
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
