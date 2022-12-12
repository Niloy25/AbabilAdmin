import React, { useState } from "react";
import Singleupload from "../../Component/Modal/SingleUploadFlowModal/Singleupload";
import ProductInformation from "../../Component/ProductInformation";
import Table from "../../Component/Table";
import upload from "../../images/upload.png";

export default function Index() {
  const [modal, setModal] = useState(false);
  const handleClickClose = () => {
    setModal(!modal);
  };

  return (
    <>
      <main className="enrollment">
        <div className="container-fluid customCOntainerfluid">
          <div className="InventoryPage">
            <div className="row firstRow">
              <div>
                <h2 className="">Inventory</h2>
              </div>
              <div>
                <form>
                  <div className="form-group ForSearch">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <button
                    className="btn fileuploadbtn"
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    <label className="form_label">
                      <img src={upload} style={{ marginRight: "10px" }} />
                      <input
                        type="file"
                        className="form-control"
                        id="uploadFile"
                      />
                      Upload books
                    </label>
                    
                  </button>
                </form>
              </div>
            </div>

            <div className="row secondRow">
              <ProductInformation/>
              <div className="rgtCnt">
                <a href="#">Download Inventory List</a>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </main>
      {modal && <Singleupload handleClickClose={handleClickClose} />}
    </>
  );
}
