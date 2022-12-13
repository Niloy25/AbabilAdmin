import React, { useState, useEffect } from "react";
import Singleupload from "../../Component/Modal/SingleUploadFlowModal/Singleupload";
import ProductInformation from "../../Component/ProductInformation";
import Table from "../../Component/Table";
import upload from "../../images/upload.png";
import { requestData } from "../../Utils/HttpClient";

export default function Index() {
  const [modal, setModal] = useState(false);
  const [allInventory, setAllInventory] = useState([])

  useEffect(() => {
    fetchInventory()
  }, [])
  

  const handleClickClose = () => {
    setModal(!modal);
  };

  const fetchInventory = async() => {
    const result = await requestData('distributor/view-all-books', 'GET');
    console.log(result);
    if(result.status){
      setAllInventory(result.data);
      console.log(result.data);
    }
  }

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
                {/* <form> */}
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
          
                      <img src={upload} style={{ marginRight: "10px" }} />
                    
                      Upload books
                   
                    
                  </button>
                {/* </form> */}
              </div>
            </div>

            <div className="row secondRow">
              <ProductInformation/>
              <div className="rgtCnt">
                <a href="#">Download Inventory List</a>
              </div>
            </div>
            <Table inventoryData={allInventory} />
          </div>
        </div>
      </main>
      {modal && <Singleupload handleClickClose={handleClickClose} />}
    </>
  );
}
