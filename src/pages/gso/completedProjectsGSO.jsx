import React, { useEffect } from 'react'
import "./completedProjectsGSO.css"
import { gsoConferences } from '../../components/gsoDB'
import { Link } from 'react-router-dom'

export default function CompletedProjectsGSO() {

  useEffect(()=>{
    

  },[])
  return (
      <>
        <div className='completed_projects'>

          <p className='compl_proj_title'>ჩატარებული პროექტები</p>

          <div className='conference_cards'>
            {
              gsoConferences.map((card,index) => {
                return(
                  
                  <Link to={card.link} key={index}>
                  <div className='card'>
                      <img src={card.image} className='card_background' alt='card bg' />
                      <p>{card.title}</p>
                  </div>
              </Link>
                )
              })
            }
          </div>

        </div>
      </>
    )
}
