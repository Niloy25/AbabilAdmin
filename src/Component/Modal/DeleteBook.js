import React from 'react'
import Crossicons from '../../images/close.png';
export default function DeleteBook(props) {

    console.log("Confirmation", props.cancelbtn);
   
    return (
        <>
                <div className='book_details_modal2 modal-part'>

                    <div className='modal-content' style={{ position: 'relative' }}>
                       <div>
                       <h2 className='title'>{props.title}</h2>
                        <p className='paraDed'>{props.paragraph}</p>
                        <div className='btnBox'>
                            <button className='noBtn'>{props.cancelbtn}</button>
                            <button onClick={props.handleDelete} className='book_details_btn_explore'>{props.confirmbtn}</button>
                        </div>
                        <button className="close-modal-part btn" onClick={props.handleClickClose} style={{ border: "0", position: 'absolute', top: '10px', right: '10px' }}>
                           <img src={Crossicons}  className="img-fluid"/>
                        </button>
                       </div>
                    </div>
                </div>
        
        </>
    )
}
