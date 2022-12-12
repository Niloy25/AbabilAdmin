import React from 'react'

export default function BusinessInfo() {
    return (
        <div>
            <h4 className='title py-3'>Business information</h4>
            <div className="row align-items-start">
                <div className="col-lg-6 col-xl-6 col-md-6  col-12">
                    <div className="form-box">
                        <div className='form-group'>
                            <label>Business Name</label>
                            <input
                                type="text"
                                className="form-control form-input form-controlreadonly"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Business Name"
                            />
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Trade number</label>
                            <input
                                type="text"
                                className="form-control form-input form-controlreadonly"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Trade number"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div className="form-box">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">PAN number</label>
                            <input
                                type="text"
                                className="form-control form-input form-controlreadonly"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="PAN number"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
