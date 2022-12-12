import React from 'react'

export default function OrderDispatchedModal(props) {
  return (
    <>
    
    <div className="order-dispatch_modal4 modal-part">
        <div className="modal-content" style={{ position: "relative" }}>
          <h2>Update shipping details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Courier name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Blue dart"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Tracking Number</label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="145908236746"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Website URL</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="www.bluedart.com"
              />
            </div>
          </form>
          <div className="btnBox">
            <button className="orderDispatch_btn">
            Mark as dispatched
            </button>
          </div>
          <button
            className="close-modal-part"
            onClick={props.handleClickClose}
            style={{
              border: "0",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  )
}
