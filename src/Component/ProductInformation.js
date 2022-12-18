import React, { useState, useEffect } from "react";
import { requestData } from "../Utils/HttpClient";

export default function ProductInformation({allInventory, setAllInventory, fetchInventory }) {
  const [bookName, setBookName] = useState("");
  const [bookQty, setbookQty] = useState("");
  const [priceHighToLow, setPriceHighToLow] = useState("");
  const [priceLowToHigh, setPriceLowToHigh] = useState("");
  const [lowerPrice, setLowerPrice] = useState("")
  const [upperPrice, setUpperPrice] = useState("")
  const [filterBook, setFilterBook] = useState([])
  // const [allBook, setAllBook] = useState(allInventory)
  const [box2, setBox2] = useState(false);
 

  // Function Calling For Inventory 
  const filterBookName = async () => {
    const result = await requestData("distributor/sort-by-bookname", "GET");
    if (result && result.data) {
      setAllInventory(result.data);
    }
    // setFilterBook(result.data)
    // handleFilterName(result.data);
    console.log("Fill", result.data);
  };

  const filterQty = async () => {
    const result = await requestData("distributor/sort-by-quantity", "GET");
    if (result && result.status) {
      setAllInventory(result.data);
      // handleFilterQty(result.data);
    }
    console.log("FillQty", result.data);
    // setFilterBook(result.data)
  };

  const filterHighToLow = async () => {
    const dataSend = {
      type: "high-to-low"
    }
    const result = await requestData("distributor/sort-by-price", "GET", dataSend);
    if (result && result.status) {
      setAllInventory(result.data);
      // handleFilterQty(result.data);
      console.log("FillPriceHigh", result.data);
    }
    // setFilterBook(result.data)
  };

  const filterLowToHigh = async () => {
    const dataSend = {
      type: "low-to-high"
    }
    const result = await requestData("distributor/sort-by-price", "GET", dataSend);
    if (result && result.status) {
      setAllInventory(result.data);
      // handleFilterQty(result.data);
    }
    console.log("FillPriceLow", result.data);
    // setFilterBook(result.data)
  };

  const filterPriceRange = (low, high) => {
    // if(upperPrice === ""){
    //   setAllInventory(allInventory)
    // }
    console.log(parseInt(high));
    console.log("All", allInventory);
    const priceRange = allInventory.filter((item) => item.bookPriceDetails.price >= parseInt(low) && item.bookPriceDetails.price <= parseInt(high))
    console.log("PriceRange", priceRange);
    setFilterBook(priceRange)
    console.log("AllBook", allInventory);
      // setAllInventory(priceRange)
  }

  useEffect(() => {
    if (bookName) {
      filterBookName();
      setBox2(false)
    }
    else if (bookQty) {
      filterQty();
      setBox2(false)
    }
    else if(priceHighToLow){
      filterHighToLow()
      setBox2(false)
    }
    else if(priceLowToHigh){
      filterLowToHigh()
      setBox2(false)
    }
    else if(filterBook && filterBook.length > 0){
      setAllInventory(filterBook)
    }
    else{
     fetchInventory() 
    }
  }, [bookName, bookQty, priceHighToLow, priceLowToHigh, filterBook]);


  // Function Calling For Order 

  return (
    <>
      <div className="wrapper">
        <div>
          <div style={{ display: "inline-block" }}>
            <button
              className="btn1"
              onClick={() => {
                setBox2(!box2);
              }}
            >
              <i className="fa-solid fa-arrow-up-wide-short"></i>Sort By
            </button>
            {box2 && (
              <div className="dropdownBox2">
                <div className="form-group ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="gridCheck">
                      Price - High to Low
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      checked={priceHighToLow ? true : false}
                      onChange={(e) => setPriceHighToLow(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="gridCheck">
                      Price - Low to High
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      checked={priceLowToHigh ? true : false}
                      onChange={(e) => setPriceLowToHigh(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="gridCheck">
                      Sort By Book Name
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      checked={bookName ? true : false}
                      onChange={(e) => setBookName(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="gridCheck">
                      Sort By Quantity
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      checked={bookQty ? true : false}
                      onChange={(e) => setbookQty(e.target.checked)}
                    />
                  </div>
                </div>
                {/* <div className="form-group ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="gridCheck">
                      Comedy
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="gridCheck">
                      Self help
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                  </div>
                </div> */}
              </div>
            )}
          </div>
          <div className="dropdown" style={{ display: "inline-block" }}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu">
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Horror
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>

              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Fiction
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Sci-Fi
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Comedy
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Self help
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Financial
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Spiritual
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Novels
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
              <div className="form-group dropdown-item">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    Manga
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricebtnarea">
          <div className="form-group price">
            <input
              type="text"
              className="form-control btn2"
              placeholder="Price"
              onChange={(e) => setLowerPrice(e.target.value)}
            />
            <i class="fa-solid fa-indian-rupee-sign"></i>
          </div>
          <span style={{ color: "#523929" }}>To</span>
          <div className="form-group price">
            <input
              type="text"
              className="form-control btn2"
              placeholder="Price"
              onChange={(e) => {
                setUpperPrice( e.target.value)
                filterPriceRange(lowerPrice, e.target.value)
              }
            }
            />
            <i class="fa-solid fa-indian-rupee-sign"></i>
          </div>
        </div>
      </div>
    </>
  );
}
