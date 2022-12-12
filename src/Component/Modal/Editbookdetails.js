import React from 'react'

function Editbookdetails() {
    return (
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
                                    <label htmlFor="">Title of book</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="The Design of everyday things"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Donald Norman"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Publisher</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="ABC Publications"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Publication date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id=""
                                        placeholder="12 / 10 / 2020"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Edition</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder={2019}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">ISBN</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder={19012089756342}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Book description</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        rows={9}
                                        id=""
                                        placeholder="The Design of Everyday Things shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time."
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">About the author</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        rows={9}
                                        id=""
                                        placeholder="The Design of Everyday Things shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time."
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
                                    <label htmlFor="booktype">Book type</label>
                                    <select className="form-control" id="booktype">
                                        <option selected="">Hardcover</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="">MRP</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="₹ 1530.00"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="">Your price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="₹ 768.00"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group unitinput mb-3">
                                    <label htmlFor="">Quantity</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder={320}
                                    />
                                    <div className="unit_text">
                                        <h6>Units</h6>
                                    </div>
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
                                <label htmlFor="">Estimate days for delivery</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder={15}
                                />
                                <div className="unit_text">
                                    <h6>Days</h6>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="savechanges_btn">
                        <button className="btn">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Editbookdetails