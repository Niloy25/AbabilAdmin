import React from "react";
import h1 from "../../images/Rectangle 293.png";
export default function Completed() {
  const loop = [1, 2, 3];
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
              <div className="wrapper">
                <div>
                  <button className="btn1">
                    <i class="fa-solid fa-arrow-up-wide-short"></i>Sort By
                  </button>
                  <div class="dropdown" style={{ display: "inline-block" }}>
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown button
                    </button>
                    <div class="dropdown-menu">
                      <div className="form-group dropdown-item">
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
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
                  {/* <button className='btn2'>
                                        <i class="fa-solid fa-indian-rupee-sign"></i>Price
                                    </button> */}
                  <div className="form-group price">
                    <input
                      type="text"
                      className="form-control btn2"
                      placeholder="Price"
                    />
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <span style={{ color: "#523929" }}>To</span>
                  <div className="form-group price">
                    <input
                      type="text"
                      className="form-control btn2"
                      placeholder="Price"
                    />
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                </div>
              </div>
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

                  <div className="col-md-3 col-12">
                    <div style={{ padding: "16px 0", textAlign: "right" }}>
                      <button>Bulk order</button>
                      <h4 className="cmpltStatus">Order Completed</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
