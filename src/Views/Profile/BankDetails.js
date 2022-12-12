import React from 'react'

export default function BankDetails() {
    return (
        <>
            <div>
                <h4 className='title py-3'>Bank Details</h4>
                <div className="row align-items-start">
                    <div className="col-lg-6 col-xl-6 col-md-6  col-12">
                        <div className="form-box">
                            <div className='form-group'>
                                <label>Account Holder name</label>
                                <input
                                    type="text"
                                    className="form-control form-input "
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Account Holder name"
                                />
                            </div>
                        </div>
                        <div className="form-box">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Branch name</label>
                                <input
                                    type="text"
                                    className="form-control form-input "
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Branch name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                        <div className="form-box">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Account number</label>
                                <input
                                    type="text"
                                    className="form-control form-input "
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Account number"
                                />
                            </div>
                        </div>
                        <div className="form-box">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">IFSC code</label>
                                <input
                                    type="text"
                                    className="form-control form-input "
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="IFSC code"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3 mb-5'>
                <div className='col-md-6'>
                    <button className='btn cancelBtn'>Cancel</button>
                </div>
                <div className='col-md-6'>
                    <button className='btn savebTN'>Save changes</button>
                </div>
            </div>
        </>
    )
}
