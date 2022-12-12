import React from 'react'
import bookimg from "../../images/Rectangle 271.png";
function EditImage() {
  return (
    <>
    <div className="book_edit_modal4 modal-part">
        <div className="modal-content">
          
          <div className='modalitem'>
            <div className='modalwrap'>
              <div className="left_cnt">
                <div className="image_area">
                  <img src={bookimg} className="img-fluid" />
                  <div className="overlay">
                    <button className="btn edit_frontimg">Edit front image</button>
                  </div>
                </div>

                <div className="image_area">
                  <img src={bookimg} className="img-fluid" />
                  <div className="overlay">
                    <button className="btn edit_frontimg">Edit front image</button>
                  </div>
                </div>

                <div className="image_area">
                  <img src={bookimg} className="img-fluid" />
                  <div className="overlay">
                    <button className="btn edit_frontimg">Edit front image</button>
                  </div>
                </div>

              </div>
            </div>
            <div className='modalwrapcontent'>
              <div className="right_cnt">
                <div className="head">
                  <h4>Image guidelines</h4>
                </div>
                <ul className="list_area">
                  <li>Image resolution should  be 264* 360 or more</li>
                  <li>Image should not be blurred</li>
                  <li>Upload the correct images in corresponding placeholders</li>
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
  )
}

export default EditImage