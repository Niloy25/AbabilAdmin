import React, { useState } from 'react'
import offer from '../../images/offer.png';
import upload from '../../images/Image.png';
import SelectBooksModal from '../../Component/Modal/SelectBooksModal';
import OfferSubmittedModal from '../../Component/Modal/OfferSubmittedModal';
export default function SelectBooks() {
    const [selectBooksmodal,setselectBooksmodal] = useState(false);
    const [submitModaltoggle,setsubmitModaltoggle] = useState(false);
    const onbooksModal = () => {
        setselectBooksmodal(!selectBooksmodal);
    }
    const submitModal = () => {
        setsubmitModaltoggle(!submitModaltoggle);
    }
    return (
        <main className="enrollment">
            <div className="container-fluid customCOntainerfluid">
                <div className="selected-books">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="row align-items-center">
                            <div className="book-top mr-3">
                                <div>
                                    <img src={offer} className='img-fluid' />
                                </div>
                            </div>
                            <div>
                                <h5 className='m-0 mb-2'>Run Offers</h5>
                                <p className='m-0'>Run offers and boost your sales</p>
                            </div>
                        </div>
                    </div>
                    <div className="sign_up_form">
                        <div className="row align-items-start mb-5">
                            <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                                <div className="form-title">
                                    <h6>01</h6>
                                    <h3>Offer details</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                                <div className="form-box">
                                    <div className="form-group">
                                        <label htmlfor="exampleInputEmail1">Offer Title</label>
                                        <input
                                            type="text"
                                            className="form-control form-input"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Mehek"
                                        />
                                    </div>
                                </div>
                                <div className="form-box">
                                    <div className="form-group">
                                        <label htmlfor="exampleInputEmail1">End Date</label>
                                        <input
                                            type="number"
                                            className="form-control form-input"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="m31/12/2021"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4 col-12">
                                <div className="form-box">
                                    <div className="form-group">
                                        <label htmlfor="exampleInputEmail1">Start Date</label>
                                        <input
                                            type="number"
                                            className="form-control form-input"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="24/10/2021"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-start mb-5">
                            <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                                <div className="form-title">
                                    <h6>02</h6>
                                    <h3>Books and Pricing</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                                <div className="form-box">
                                    <div className="form-group">
                                        <label className='invisible' htmlFor="exampleFormControlSelect1">sa</label>
                                        <select
                                            className="form-control form-input"
                                            id="exampleFormControlSelect1"
                                        >
                                            <option>Select Books</option>
                                            <option>All books</option>
                                            <option>Custom Selection</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4 col-12">
                                <div className="form-box">
                                    <div className="form-group">
                                        <label htmlfor="exampleInputEmail1">Discount Percentage</label>
                                        <input
                                            type="text"
                                            className="form-control form-input"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter discount percentage"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="offset-lg-4 col-lg-8 col-12">
                                <div className="form-box">
                                    <button className='view_BTn' onClick={onbooksModal}>View and edit Selections</button>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-start mb-5">
                            <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                                <div className="form-title">
                                    <h6>03</h6>
                                    <h3>Upload banners</h3>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-8 col-md-8  col-12">
                                <div className="form-box  ">
                                    <div classname="form-group ">
                                        <label htmlfor="uploadFile" classname="form_labelFile" id='form_labelFile'>
                                            <img src="images/Image.png" alt="" className="img-fluid" />
                                            <span className="uloadpsbna d-block text-center" >
                                                <span className='d-flex align-items-center justify-content-center mb-2'>
                                                    <img src={upload} className="img-fluid" />
                                                    <span className='edit_TExt'>Edit image</span>
                                                </span>
                                                <p className='para_TExt'>Dimensions : 1280*584 or more</p>
                                            </span>
                                            <input
                                                type="file"
                                                classname="form-control form-input uploadFile"
                                                id="uploadFile"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="form-box">
                                    <div classname="form-group">
                                        <label htmlfor="uploadFile" classname="form_labelFile" id='form_labelFile'>
                                            <img src="images/Image.png" alt="" classname="img-fluid" />
                                            <span className="uloadpsbna d-block text-center" >
                                                <span className='d-flex align-items-center justify-content-center mb-2'>
                                                    <img src={upload} className="img-fluid" />
                                                    <span className='edit_TExt'>Edit image</span>
                                                </span>
                                                <p className='para_TExt'>Dimensions : 1280*308 or more</p>
                                            </span>
                                            <input
                                                type="file"
                                                classname="form-control form-input uploadFile"
                                                id="uploadFile"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="apply">
                                    <button className="approval" onClick={submitModal}>Submit offer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectBooksmodal &&(
                <SelectBooksModal onSelect={onbooksModal} />
            )}
            {submitModaltoggle &&(
                <OfferSubmittedModal onSelect={submitModal} />
            )}
            
        </main>

    )
}
