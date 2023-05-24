import React from 'react';


const Book = ({ img, author, title,number }) => {
    console.log(number)
    return (
        <article className='book'>
            <img
                src={img}
                alt='Interesting Facts For Curious Minds'
            />
            <h2>{title}</h2>
           
            <button onClick={()=>console.log(title)}>display title</button>
            <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                {author}
            </h4>
            <span className='number'>#{number+1}</span>


        </article>
    );
};

export default Book;

