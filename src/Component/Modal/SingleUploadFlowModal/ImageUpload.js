import React from "react";
import bookimg from "../../../images/Rectangle 271.png";
import upload from "../../../images/Image.png";
export default function ImageUpload({handleClick}) {
  const loop = [1, 2, 3];
  
  return (
    <>
      <div className="book_edit_modal4 imageUploadModal modal-part">
        <div className="modal-content">
          <div className="modalitem">
            <div className="modalwrap">
              <div className="left_cnt">
                {loop.map((item) => {
                  return (
                    <div className="image_area upBox">
                      {/* <img src={bookimg} className="img-fluid" /> */}
                      <label className="form_label">
                      <img src={upload}  />
                      <input
                        type="file"
                        className="form-control"
                        id="uploadFile"
                        onChange={(e) => handleClick(e.target.files[0])}
                      />
                      Upload back image
                    </label>
                    </div>
                  );
                })}
          
              </div>
            </div>
            <div className="modalwrapcontent">
              <div className="right_cnt">
                <div className="head">
                  <h4>Image guidelines</h4>
                </div>
                <ul className="list_area">
                  <li>Image resolution should be 264* 360 or more</li>
                  <li>Image should not be blurred</li>
                  <li>
                    Upload the correct images in corresponding placeholders
                  </li>
                  <li>Front and back images are mandatory to be uploaded</li>
                </ul>
                <div className="continue_btn">
                  <button className="btn">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
