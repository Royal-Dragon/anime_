import React from 'react'
import Book from './book'
import { books } from './books'

//to make a for loop in books array and displaying
const App = () => {
  

  return (
    <>
    <h1>My anime recommendations</h1>
    <div className='booklist'>
      {books.map((item,index) => {
        return <Book {...item} number={index} />;
      })}
    </div>
    </>
  )
}

export default App
