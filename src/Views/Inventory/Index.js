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

  // const handleFilterName = (data=[]) => {
  //   console.log("FilterName...", data);
  //   setAllInventory(data)
  // }

  // const handleFilterQty = (data=[]) => {
  //   console.log("FilterQty...", data);
  //   setAllInventory(data)
  // }


  const handleClickClose = () => {
    setModal(!modal);
  };

  const fetchInventory = async () => {
    const result = await requestData('distributor/view-all-books', 'GET');
    // console.log("Inventory", result);
    if (result && result.status) {
      setAllInventory(result.data);
      console.log("ViewInventory", result.data);
    }
  }

  const searchResult = (searchData) => {
    console.log(searchData);
    // console.log("searchValue", searchValue);
    if(searchData === ""){
      fetchInventory()
    }
    const filterBook = allInventory.filter((item) => item.bookName.toLowerCase().includes(searchData.toLowerCase()) || item.bookType.toLowerCase().includes(searchData.toLowerCase()))
    console.log("Filter", filterBook);
    if (filterBook.length > 0) {
      setAllInventory(filterBook)
    }
    else{
      fetchInventory()
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
                    onChange={(e) => {
                      searchResult(e.target.value)
                    }}
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
              <ProductInformation
                // handleFilterName={handleFilterName} 
                // handleFilterQty={handleFilterQty}
                setAllInventory={setAllInventory}
                allInventory={allInventory}
                fetchInventory={fetchInventory}
              />
              <div className="rgtCnt">
                <a href="#">Download Inventory List</a>
              </div>
            </div>
            <Table setAllInventory={setAllInventory} inventoryData={allInventory} />
          </div>
        </div>
      </main>
      {modal && <Singleupload handleClickClose={handleClickClose} />}
    </>
  );
}
