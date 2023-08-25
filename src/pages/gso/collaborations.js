import React from 'react'
import "./collaborations.css"
import { collabDB } from '../../components/collaborationsDB'
import PatientCardComponent from '../../components/patientCardComponent/PatientCardComponent'

export default function Collaborations() {
  return (
    <>
      <div className='patient'>
        <p className='patient_title'>საერთაშორისო ასოციაციებთან კოლაბორაცია</p>

        <div className='patient_doc_list'>
            {
              collabDB.map((card,index) => {
                return(
                    <PatientCardComponent title={card.title} cover={card.cover} link={card.link} key={index}/>
                )
              })
            } 
        </div>
      </div>
    </>
  )
}
