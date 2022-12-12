import React, {useState} from "react";
import h1 from "../../images/Rectangle 293.png";
import OrderDispatchedModal from "../../Component/Modal/OrderDispatchedModal";
import ProductInformation from "../../Component/ProductInformation";

export default function Index() {
  const loop = [1, 2, 3];
  const [modal5, setModal5]= useState(false);
  const handleClickClose4 = () => {
    setModal5(!modal5)
  };
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
           <ProductInformation/>
            </div>

            {loop.map((item) => {
              return (
                <div className="frthRow mt-4">
                  <div className="col-lg-5 col-md-12 col-12">
                    <div style={{ padding: "16px 0" }}>
                      <div
                        style={{ margin: "10px 0", display: "inline-block" }}
                      >
                        <span>Order ID : 15678904536</span>
                        <span>Date : 14/10/2021</span>
                      </div>
                      <div className="d-flex flexWrap">
                        <div>
                          <img
                            src={h1}
                            style={{ width: "109px", height: "148px" }}
                          />
                        </div>
                        <div style={{ marginLeft: "16px" }} className="rgtcnt">
                          <h4>The Design of Everyday Things</h4>
                          <span>By Donald Norman</span>
                          <div
                            className="d-flex"
                            style={{
                              justifyContent: "space-between",
                              marginTop: "40px",
                            }}
                          >
                            <div>
                              <span>Format</span>
                              <h4>Hardcover</h4>
                            </div>
                            <div>
                              <span>Quantity</span>
                              <h4>50 Units</h4>
                            </div>
                            <div>
                              <span>Total Price</span>
                              <h4>14,900.00</h4>
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
                      <h4>Rohit Singhdeo</h4>
                      <p style={{ lineHeight: "27px" }}>
                        Link Rd, Yogi Nagar, MHB Colony, Vazira Naka, Gorai Rd
                        <br />
                        Near Victoria Terminus , Navi Mumbai
                        <br />
                        400091 Borivali (W)
                      </p>
                      <div className="callingNumber">
                        <a>
                          <span>
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          +91 8658904356
                        </a>
                        <a>
                          <span>
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          +91 8658904356
                        </a>
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
