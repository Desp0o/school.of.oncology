import React from 'react'
import "./patient.css"
import PatientCardComponent from '../../components/patientCardComponent/PatientCardComponent'
import { patientDBgso } from '../../components/patientDB'

export default function Patient() {
  return (
    <>
      <div className='patient'>
        <p className='patient_title'>პაციენტებისთვის</p>

        <div className='patient_doc_list'>
            {
              patientDBgso.map((card) => {
                return(
                    <PatientCardComponent title={card.title} cover={card.cover} link={card.link} />
                )
              })
            } 
        </div>
      </div>
    </>
  )
}
