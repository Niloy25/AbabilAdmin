import React from 'react'

export default function OffersList() {
    return (
        <main className="enrollment">
            <div className="container-fluid customCOntainerfluid">
                <div className="offers-table">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="top-left">
                                <h3>Offers</h3>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="top-right">
                                <form className=" d-block d-md-flex justify-content-end my-2 my-lg-0">
                                    <div className='position-relative'>
                                        <input
                                            className="form-control mr-sm-2"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <div className="search-icon">
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </div>
                                    </div>
                                    <button className="create-offer">
                                        <a className="plus-icon" href="#">
                                            <i className="fa-solid fa-plus" />
                                        </a>
                                        Create offer
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='secondRow'>
                        <div className='wrapper px-3'>
                            <button class="btn1"><i class="fa-solid fa-arrow-up-wide-short"></i>Sort By</button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Books</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Discount price</th>
                                    <th scope="col">Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>50% Discount</td>
                                    <td>
                                        <p>The Design of Everyday Things</p>
                                        <p>The Design of Everyday Things</p>
                                        <p>The Design of Everyday Things</p>
                                        <p>The Design of Everyday Things</p>
                                    </td>
                                    <td>
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                    </td>
                                    <td>
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                    </td>
                                    <td>
                                        <p>24/10/21</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>50% Discount</td>
                                    <td>
                                        <p>Think and grow rich</p>
                                        <p>Think and grow rich</p>
                                    </td>
                                    <td>
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                    </td>
                                    <td>
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                    </td>
                                    <td>
                                        <p>24/10/21</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>50% Discount</td>
                                    <td>
                                        <p>Think and grow rich</p>
                                        <p>I Think I Love You</p>
                                    </td>
                                    <td>
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                    </td>
                                    <td>
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                        <span>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            900.50
                                        </span>
                                        <br />
                                    </td>
                                    <td>
                                        <p>24/10/21</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>

    )
}
