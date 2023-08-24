import React from 'react'
import "./CardComponent.css"

import { Link } from 'react-router-dom'

export default function CardComponent(props) {
  return (
    <>
        <Link to={props.link}>
            <div className='card'>
                <img src={props.cover} className='card_background' alt='card bg' />
                <p>{props.title}</p>
            </div>
        </Link>
        
    </>
  )
}
