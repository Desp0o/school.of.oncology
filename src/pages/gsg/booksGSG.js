import React from 'react'
import "./booksGSG.css"
import BookComponent from '../../components/bookComponent/BookComponent'
import {GsgBooks} from "../../components/booksDB"

export default function BooksGSG() {
  return (
    <>
        <div className='books'>
            <p className='books_title'>სახელმძღვანელოები</p>

            <div className='book_list'>
               {GsgBooks.map((book, index)=> {
                return(
                    <BookComponent 
                            title={book.title}
                            cover={book.cover}
                            link={book.link}
                            key={index}
                    />
                )
               })}
            </div>

        </div>
    </>
  )
}
