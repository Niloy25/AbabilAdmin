import React, {useState} from "react";
import u1 from "../../../images/Group 91.png";
import u2 from "../../../images/Group 339.png";
import UploadImageModal from "./UploadImageModal";
import ImageUploadForBulk from "./ImageUploadForBulk";
export default function Singleupload(props) {
  const [modal3, setModal3]= useState(false);
  const handleClickClose2 = () => {
    setModal3(!modal3)
  };
  const [modal7, setModal7]= useState(false);
  
  const handleClickClose7 = () => {
    setModal7(!modal7)
  };
  return (
    <>
      <div className="single_upload_modal5 modal-part">
        <div className="modal-content" style={{ position: "relative" }}>
          <h2>Single upload</h2>
          <div className="row m-auto">
            <div className="text-center wrap-box" onClick={()=>{setModal7(true)}}>
              <div className="img-box">
                <img src={u2} />
              </div>
              <h4>Bulk upload</h4>
              <p>Upload multiple books at the same time</p>
            </div>
            <div className="text-center wrap-box" onClick={()=>{setModal3(true)}}>
              <div className="img-box">
                <img src={u1} />
              </div>
              <h4>Single upload</h4>
              <p>Upload single book at a time</p>
            </div>
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

      {modal3&&(<UploadImageModal handleClickClose2={handleClickClose2}/>)}
      {modal7&&(<ImageUploadForBulk handleClickClose={handleClickClose7}/>)}
    </>
  );
}
