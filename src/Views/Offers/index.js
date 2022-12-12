import React from 'react'
import { Link } from 'react-router-dom';
import offer from '../../images/offer.png';
export default function index() {
    return (
        <main className="enrollment">
            <div className="container-fluid customCOntainerfluid">
                <div className="no-offers">
                    <h6>Offers</h6>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="row">
                            <div className="content">
                                <div className="price-tag">
                                    <img
                                        className="img-fluid"
                                        src={offer}
                                        alt="icon"
                                    />
                                </div>
                                <h4>No running offers</h4>
                                <p>Add offers to uplift your sales and gain more customers</p>
                                <div className="offer-btn">
                                    <Link to='/selectbooks'>
                                        <button className="apply-button">Apply for offers</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
