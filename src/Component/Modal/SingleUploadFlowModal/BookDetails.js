import React from 'react'

export default function BookDetails() {
  return (
 <>
 
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
                                    />
                                </div>
                                <div className="form-group mb-3">
                                  
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Author"
                                    />
                                </div>
                                <div className="form-group mb-3">
                             
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Publisher"
                                    />
                                </div>
                         
                                <div className="form-group mb-3">
                                 
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Edition"
                                    />
                                </div>
                                <div className="form-group mb-3">
                             
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="ISBN"
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
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                  
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        rows={9}
                                        id=""
                                        placeholder="About the author"
                                        defaultValue={""}
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
  )
}
