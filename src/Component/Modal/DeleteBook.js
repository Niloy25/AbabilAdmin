import React from 'react'
import Crossicons from '../../images/close.png';
import { requestData } from "../../Utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function DeleteBook(props) {

    console.log("Confirmation", props.cancelbtn);
    console.log("BookId", props.bookId);

    const toastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    };

    const deleteBook = async () => {
        const result = await requestData(`distributor/book-delete/${props.bookId}`, 'POST');
        console.log(result);
        if (result && result.status) {
            toast.success(result.message, toastOptions)
            fetchInventory()
            setTimeout(() => {
                props.handleClickClose()
            }, 2000);
        }
        else {
            toast.error(result.message, toastOptions)
        }
    }

    const fetchInventory = async() => {
        const result = await requestData('distributor/view-all-books', 'GET');
        // console.log("Inventory", result);
        if(result && result.status){
          props.setAllInventory(result.data);
          // console.log("ViewInventory", result.data);
        }
      }

    return (
        <>
            <div className='book_details_modal2 modal-part'>

                <div className='modal-content' style={{ position: 'relative' }}>
                    <div>
                        <h2 className='title'>{props.title}</h2>
                        <p className='paraDed'>{props.paragraph}</p>
                        <div className='btnBox'>
                            <button className='noBtn'>{props.cancelbtn}</button>
                            <button onClick={deleteBook} className='book_details_btn_explore'>{props.confirmbtn}</button>
                        </div>
                        <button className="close-modal-part btn" onClick={props.handleClickClose} style={{ border: "0", position: 'absolute', top: '10px', right: '10px' }}>
                            <img src={Crossicons} className="img-fluid" />
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
