import React, { useState } from 'react'
import DeleteBook from '../Component/Modal/DeleteBook';
import EditImage from './Modal/EditImage';
import Multistepsmodal from '../Component/Modal/Multistepsmodal';


export default function Table() {
  const [box, setBox] = useState(false);
  const [modal2, setModal2]= useState(false);
  const handleClickClose = () => {
    setModal2(!modal2)
  };
  const [modal3, setModal3]= useState(false);
  const handleClickClose2 = () => {
    setModal3(!modal3)
  };
  return (
    <>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th className='text-center'>S.No</th>
              <th>Book Name</th>
              <th>Type</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center'>1</td>
              <td>The Design Of Everyday Things</td>
              <td>Hardcover
                Paperback</td>
              <td>158</td>
              <td>650.50</td>
              <td>Horror
                <a href="#" onClick={() => { setBox(!box) }}><i class="fa-solid fa-ellipsis-vertical"></i>
                  {box &&(<div className='boxwrap'>
                    <h2 onClick={() => { setModal3(true) }}><i class="fa-solid fa-pencil"></i>Edit details</h2>
                    <h2 onClick={()=>{setModal2(true)}}><i class="fa-regular fa-trash-can"></i>Remove</h2>
                    <h2><i class="fa-solid fa-circle-info"></i>See details</h2>
                  </div>)}
                </a>
              </td>
            </tr>
            <tr>
              <td className='text-center'>1</td>
              <td>The Design Of Everyday Things</td>
              <td>Hardcover
                Paperback</td>
              <td>158</td>
              <td>650.50</td>
              <td>Horror
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {modal2 && (
        <DeleteBook 
          title={'Are you sure ?'} 
          paragraph={'The book ???The design of everyday things??? will be deleted and no longer be shown to the buyers.'}
          cancelbtn={'NO'}
          confirmbtn={'Yes, Delete'}
          handleClickClose={handleClickClose} 
        />
      )}
      {modal3 &&(<Multistepsmodal handleClickClose2={handleClickClose2}/>)}
    </>
  )
}
