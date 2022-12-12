import React, { useState } from "react";

export default function ProductInformation() {
  const [box2, setBox2] = useState(false);
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
                      Horror
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
                      Fiction
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
                      Sci-Fi
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
                </div>
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
    </>
  );
}
