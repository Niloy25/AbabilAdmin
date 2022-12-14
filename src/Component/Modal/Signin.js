import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import { requestData } from "../../Utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Crossicons from "../../images/close.png";

export default function Signin(props) {

  
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

  const handleValidation = () => {
    
  };

  const submitBook = async () => {
    if(handleValidation()){
      
      const result = await requestData('distributor/single-book-upload', "POST", )
      console.log(result);
      if(result && result.status){
        console.log(result.data);
        toast.success("Book added Successfully!", toastOptions)
      }
    }
  };

  return (
    <>
 
      <div className="book_edit_modal4 modal-part SigninModal">
        <div className="modal-content">
          <div className="book_details">
            <div className="head">
              <h4 className="text-center" style={{fontSize:"30px", marginBottom:"48px"}}>Login</h4>
            </div>
            <div className="row mb-4">
              <div className="col-md-12">
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter your Email"
                    //   onChange={(e) =>
                    //     setBookDetail({
                    //       ...bookDetail,
                    //       bookName: e.target.value,
                    //     })
                    //   }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter your password"
                    //   onChange={(e) =>
                    //     setBookDetail({ ...bookDetail, author: e.target.value })
                    //   }
                    />
                  </div>
                  </form>
             </div>
            <div className="savechanges_btn" style={{margin:"auto"}}>
              <button onClick={submitBook} className="btn">
                Upload
              </button>
            </div>
          </div>
        </div>
        <button
            className="close-modal-part btn"
            onClick={props.handleClickClose}
            style={{
              border: "0",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          ><img src={Crossicons} className="img-fluid" /></button>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}
