import React, {useState} from "react";
import download from "../../../images/Download.png";
import upload1 from "../../../images/Upload1.png";
import Crossicons from "../../../images/close.png";
import UploadSuccess from "./UploadSuccess";
import BulKploadProcess from "./BulkuploadProcess";
export default function ImageUploadForBulk(props) {

  const bulkImages = [
    download,
    upload1
    ];

  const [modal8, setModal8]= useState(false);
  const handleClickClose7 = () => {
    setModal8(!modal8)
  };

  const [modal9, setModal9]= useState(false);
  const handleClickClose8 = () => {
    setModal9(!modal9)
  };
  return (
    <>
      <div className="book_edit_modal4 imageUploadModal imageuploadForBulkModal modal-part">
        <div className="modal-content">
          <h4 className="text-left" onClick={()=>{setModal9(true)}} style={{cursor:"pointer"}}>Bulk Upload</h4>
          <p className="text-left">
            For bulk upload , you need to fill the sheet with the exact data ,
            you can upload <br />
            the filled sheet later
          </p>
          <div className="modalitem">
            <div className="modalwrap">
              <div className="left_cnt">
                { bulkImages.map((img) => {
                  return (
                    <div className="image_area upBox">
                      {/* <img src={bookimg} className="img-fluid" /> */}
                      <label className="form_label">
                        <img src={img}  className="bulkImage"/>
                        <input
                          type="file"
                          className="form-control"
                          id="uploadFile"
                        />
                        Download template
                      </label>
                    </div>
                  );
                })}
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
                  <button className="btn" onClick={()=>{setModal8(true)}}>Continue</button>
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
      {modal8&&(<UploadSuccess handleClickClose={handleClickClose7}/>)}
      {modal9&&(<BulKploadProcess handleClickClose={handleClickClose8}/>)}

    </>
  );
}
