import React, {useState, useEffect} from "react";
import h1 from "../../images/Rectangle 293.png";
import OrderDispatchedModal from "../../Component/Modal/OrderDispatchedModal";
// import ProductInformation from "../../Component/ProductInformation";
import { requestData } from "../../Utils/HttpClient";
import moment from "moment";
import { useLocation } from "react-router";
import ProductOrderFilter from "../../Component/ProductOrderFilter";

export default function Index() {

  const loop = [1, 2, 3];
  const [modal5, setModal5]= useState(false);
  const [allOrder, setAllOrder] = useState([])
  const location = useLocation()
  console.log("Location", location);

  useEffect(() => {
    fetchAllOrder()
  }, [])
  
  const fetchAllOrder = async() => {
    const result = await requestData('distributor/view-distributor-orders', 'GET')
    console.log(result);
    if(result && result.status){
      setAllOrder(result.data)
      console.log("AllOrder...", result.data);
    }
  }

  const handleClickClose4 = () => {
    setModal5(!modal5)
  };

  const searchResult = (searchData) => {
    console.log(searchData);
    // console.log("searchValue", searchValue);
    if(searchData === ""){
      fetchAllOrder()
    }
    const filterBook = allOrder.filter((item) => JSON.stringify(item).toLowerCase().includes(searchData.toLowerCase()))
    console.log("Filter", filterBook);
    if (filterBook.length > 0) {
      setAllOrder(filterBook)
    }
    else{
      fetchAllOrder()
    }
  }

  return (
    <>
      <main className="enrollment">
        <div className="container-fluid">
          <div className="Order-page">
            <div className="firstRow">
              <div className="heading">Orders</div>
              <div className="form-group ForSearch">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
                  onChange={(e) => searchResult(e.target.value)}
                />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="sndRow mb-4">
              <div className="processBtn">
                <button>
                  Orders<span>3</span>
                </button>
              </div>
              <div className="processBtn">
                <button>
                  Dispatched <span>2</span>
                </button>
              </div>
              <div className="processBtn">
                <button>
                  Delivered <span>3</span>
                </button>
              </div>
              <div className="processBtn">
                <button>
                  Replacements <span>1</span>
                </button>
              </div>
              <div className="processBtn">
                <button>
                  Cancelled <span>2</span>
                </button>
              </div>
              <div className="processBtn">
                <button>
                  Completed <span>2</span>
                </button>
              </div>
            </div>
            <div className="row secondRow">
           <ProductOrderFilter fetchAllOrder={fetchAllOrder} allOrder={allOrder} setAllOrder={setAllOrder} />
            </div>

            {allOrder?.map((item, index) => {
              return (
                <div key={index} className="frthRow mt-4">
                  <div className="col-lg-5 col-md-12 col-12">
                    <div style={{ padding: "16px 0" }}>
                      <div
                        style={{ margin: "10px 0", display: "inline-block" }}
                      >
                        <span>Order ID : 15678904536</span>
                        <span>Date : {moment(item.orderDate).format('LL')}</span>
                      </div>
                      <div className="d-flex flexWrap">
                        <div>
                          <img
                            src={item.BookDetails?.image}
                            style={{ width: "109px", height: "148px" }}
                          />
                        </div>
                        <div style={{ marginLeft: "16px" }} className="rgtcnt">
                          <h4>{item.BookDetails?.bookName}</h4>
                          <span>By {item.BookDetails?.publisher}</span>
                          <div
                            className="d-flex"
                            style={{
                              justifyContent: "space-between",
                              marginTop: "40px",
                            }}
                          >
                            <div>
                              <span>Format</span>
                              <h4>{item.Format}</h4>
                            </div>
                            <div>
                              <span>Quantity</span>
                              <h4>{item.quantity}</h4>
                            </div>
                            <div>
                              <span>Total Price</span>
                              <h4>{item.price}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-12">
                    <div style={{ padding: "16px 0" }}>
                      <span
                        style={{ margin: "10px 0", display: "inline-block" }}
                      >
                        Buyer details
                      </span>
                      <h4>{`${item.BuyerDetails?.firstname} ${item.BuyerDetails?.lastname}`}</h4>
                      <p style={{ lineHeight: "27px" }}>
                        {`${item.BuyerDetails?.addressLine1} ${item.BuyerDetails?.addressLine2}`}{/* Link Rd, Yogi Nagar, MHB Colony, Vazira Naka, Gorai Rd */}
                        <br />
                        {`${item.BuyerDetails?.state}, ${item.BuyerDetails?.country}`}{/* Near Victoria Terminus , Navi Mumbai */}
                        <br />
                        {item.BuyerDetails?.city}- 400091 
                      </p>
                      <div className="callingNumber">
                        <a>
                          <span>
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          {item.BuyerDetails?.mobile}{/* +91 8658904356 */}
                        </a>
                        {/* <a>
                          <span>
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          +91 8658904356
                        </a> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-3 col-md-4 col-12"
                    style={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <div className="dispatchBtn">
                      <a onClick={()=>{setModal5(true)}} style={{cursor:"pointer"}}>Mark as dispatched</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      {modal5 && (<OrderDispatchedModal handleClickClose={handleClickClose4} />)}
    </>
  );
}
