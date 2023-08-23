import React from 'react'
import "./CardComponent.css"

import card1 from "../../utils/images/conference1.webp"
import { Link } from 'react-router-dom'

export default function CardComponent(props) {
  return (
    <>
        <Link to='/'>
            <div className='card'>
                <img src={props.cover} className='card_background' alt='card bg' />
                <p>{props.title}</p>
            </div>
        </Link>
        
    </>
  )
}
