import React from 'react'
import IndianFlag from '../../images/indian-flag.png';

export default function AddressInfo() {
    return (
        <div>
            <h4 className='title py-4'>Address Information</h4>
            <div className="row align-items-start">
                <div className="col-lg-6 col-xl-6 col-md-6  col-12">
                    <div className="form-box">
                        <div className='form-group'>
                            <label>Country</label>
                            <div className='position-relative'>
                                <span className='phone_NumCOuntry'><img src={IndianFlag} className="indianFlagImage" /></span>
                                <input type='text' className="form-control" placeholder='India' style={{ paddingLeft: '50px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">City</label>
                            <input
                                type="text"
                                className="form-control form-input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Kolkata"
                            />
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Address Line 2</label>
                            <input
                                type="text"
                                className="form-control form-input form-image"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="abcdefghijklmno"
                            />

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-12">
                    <div className="form-box">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">State</label>
                            <input
                                type="text"
                                className="form-control form-input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="West Bengal"
                            />
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Address Line 1</label>
                            <input
                                type="text"
                                className="form-control form-input form-image"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="abcdefghijklmno"
                            />

                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ZIP / Postal code</label>
                            <input
                                type="number"
                                className="form-control form-input form-image"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder={567890}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
