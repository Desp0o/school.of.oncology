import React from 'react'
import "./PatientCardComponent.css"
import { Link } from 'react-router-dom'

export default function PatientCardComponent(props) {
  return (
    <>
        <Link to={props.link} target='_blank'rel="noopener noreferrer">
            <div className='patiet_card'>
                <img src={props.cover} alt='patient cover' className='patient_cover' />
                <p>{props.title}</p>
            </div>
        </Link>
    </>
  )
}
