import React from 'react'
import uploadnobook from '../../images/uploadnobook.png';

export default function index() {
  return (
    <>
        <div className='uploadblankbooks text-center'>
            <img src={uploadnobook} className='img-fluid pb-3' />
            <h2 className='title'>No books uploaded</h2>
            <p className='para'>Analytics will be calculated on the books you have uploaded</p>
            <button className='btn uploadBooksBtn'>Upload books</button>
        </div>
    </>
  )
}
