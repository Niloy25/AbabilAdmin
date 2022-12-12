import React from "react";
import file from "../../../images/carbon_document.png";
import Crossicons from "../../../images/close.png";
export default function DownloadSheetFoeBulk(props) {
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
          <div className="">
            <div className="">
              <div className="">
                <div className="image_area download">
                
                    <img src={file} style={{margin:"auto"}}/>
                  
                    <p>Booklisting.CSV has been verified. 10 errors were found.
                    <br />
                    Download the sheet and upload again.</p>
              
                  <a>Download Sheet</a>
              
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
    </>
  );
}
