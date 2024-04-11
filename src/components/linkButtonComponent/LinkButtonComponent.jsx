import React from 'react'
import "./LinkButtonComponent.css"
import { Link } from 'react-router-dom'

export default function LinkButtonComponent(props) {
  return (
    <Link to={props.link}>
        <div className='btn_component'>
            {props.name}
        </div>
    </Link>
    
  )
}
