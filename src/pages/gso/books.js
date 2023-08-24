import React from 'react'
import "./books.css"
import BookComponent from '../../components/bookComponent/BookComponent'
import { BooksDB } from '../../components/booksDB'

export default function Books() {
  return (
    <>
        <div className='books'>
            <p className='books_title'>სახელმძღვანელოები</p>

            <div className='book_list'>
               {BooksDB.map((book, index)=> {
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
