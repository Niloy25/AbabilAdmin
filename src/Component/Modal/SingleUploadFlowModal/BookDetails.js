import React, {useState} from "react";

export default function BookDetails() {

    const bookPriceData = {
        bookTypeID: "",
        mrp: "",
        price: "",
        quantity: ""
    }
    const [detail, setDetail] = useState([])
    const [bookPrice, setBookPrice] = useState(bookPriceData)

    const data = {
        bookName: "",
        author: "",
        publisher: "",
        edition: "",
        isbnNo: "",
        tags: [],
        bookDesc: "",
        aboutAuthor: "",
        bookPriceDetails: [bookPrice],
        deliveryEstimate: "",
        image: ""
    }
    const [bookDetail, setBookDetail] = useState(data)

  return (
    <>
    {console.log(bookDetail)}
      <div className="book_edit_modal4 modal-part">
        <div className="modal-content">
          <div className="book_details">
            <div className="head">
              <h4>Book details</h4>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Title of book"
                      onChange={(e) => setBookDetail({...bookDetail, bookName: e.target.value})}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Author"
                      onChange={(e) => setBookDetail({...bookDetail, author: e.target.value})}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Publisher"
                      onChange={(e) => setBookDetail({...bookDetail, publisher: e.target.value})}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Edition"
                      onChange={(e) => setBookDetail({...bookDetail, edition: e.target.value})}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="ISBN"
                      onChange={(e) => setBookDetail({...bookDetail, isbnNo: e.target.value})}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <select className="form-control" id="booktype">
                      <option selected="">Tags</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="form-group mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      rows={9}
                      id=""
                      placeholder="Book description"
                      onChange={(e) => setBookDetail({...bookDetail, bookDesc: e.target.value})}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      rows={9}
                      id=""
                      placeholder="About the author"
                      onChange={(e) => setBookDetail({...bookDetail, aboutAuthor: e.target.value})}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="bottom_head">
              <h4>Pricing details</h4>
            </div>
            <form>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <select className="form-control" id="booktype">
                      <option selected="">Book type</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="MRP"
                    onChange={(e) => setBookPrice({...bookPrice, mrp: e.target.value})}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Your price"
                      onChange={(e) => setBookPrice({...bookPrice, price: e.target.value})}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group unitinput mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Quantity"
                      onChange={(e) => setBookPrice({...bookPrice, quantity: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="another_booktype">
              <a href="#" className="btn">
                <i className="fa-solid fa-plus" /> Add another book type
              </a>
            </div>
            <div className="bottom_head">
              <h4>Delivery Estimate</h4>
            </div>
            <form>
              <div className="col-md-4 mb-5">
                <div className="form-group unitinput mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Estimate days for delivery"
                  />
                  <div className="unit_text">
                    <h6>Days</h6>
                  </div>
                </div>
              </div>
            </form>
            <div className="savechanges_btn">
              <button className="btn">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
