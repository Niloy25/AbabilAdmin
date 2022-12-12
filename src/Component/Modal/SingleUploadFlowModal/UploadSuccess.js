import React from "react";
import successimg from "../../../images/Frame.png";
import Crossicons from "../../../images/close.png";
export default function UploadSuccess(props) {
  return (
    <>
      <div className="uploadSuccessForBulkModal modal-part">
        <div className="modal-content">
          <div className="confirmation_page">
            <div className="icon_area">
              <img src={successimg} className="img-fluid" />
            </div>
            <div className="head">
              <h3>Upload successful</h3>
            </div>
            <div className="text">
              <p>Your upload is succesful and will be reflected shortly</p>
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
            >
              <img src={Crossicons} className="img-fluid" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
