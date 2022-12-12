import React, { useState } from "react";
import file from "../../../images/carbon_document.png";
import Crossicons from "../../../images/close.png";
import SoldprogressBooks from "../../../Views/Dashboard/SoldprogressBooks";
import DownloadSheetFoeBulk from "./DownloadSheetFoeBulk";
export default function BulKuploadProcess(props) {
  const [modal, setModal] = useState(false);
  const handleClickClose = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="book_edit_modal4 imageUploadModal imageuploadForBulkModal modal-part">
        <div className="modal-content">
          <h4 className="text-left">Bulk Upload</h4>
          <p className="text-left">
            For bulk upload , you need to fill the sheet with the exact data ,
            you can upload <br />
            the filled sheet later
          </p>
          <div className="modalitem">
            <div className="modalwrap">
              <div className="left_cnt">
                <div className="image_area upBox">
                  {/* <img src={bookimg} className="img-fluid" /> */}

                  <img src={file} style={{ margin: "0" }} />

                  <span className="uploadProcessText">
                    Booklisting.CSV is being uploaded. please wait
                  </span>

                  <div className="d-flex">
                    <div class="progress main_progress mb-3 mb-md-0">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: `${props.width}%` }}
                        aria-valuenow={props.width}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h2 className="progressClose"><i class="fa-solid fa-xmark"></i></h2>
                  </div>
                  <span className="showProgressValue">65% Completed</span>
                </div>
              </div>
            </div>
            <div className="modalwrapcontent">
              <div className="right_cnt">
                <div className="head">
                  <h4>Upload guidelines</h4>
                </div>
                <ul className="list_area">
                  <li>Fill the sheet with correct information</li>
                  <li>Fill all the mandatory fields</li>

                  <li>Upload the sheet once filled</li>
                </ul>
                <div className="continue_btn">
                  <button
                    className="btn"
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    Continue
                  </button>
                </div>
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
          >
            <img src={Crossicons} className="img-fluid" />
          </button>
        </div>
      </div>
      {modal && <DownloadSheetFoeBulk handleClickClose={handleClickClose} />}
    </>
  );
}
