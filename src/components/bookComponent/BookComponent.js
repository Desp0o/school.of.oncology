import React from 'react'
import { Link } from 'react-router-dom'
import "./BookComponent.css"

export default function BookComponent(props) {
  return (
    <Link to={props.link}>
        <div className='book_container'>
            <img src={props.cover} alt='book cover' className='book_cover' />

            <p>{props.title}</p>
        </div>
    </Link>
  )
}
