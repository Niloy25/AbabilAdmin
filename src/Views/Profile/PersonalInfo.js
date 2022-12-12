import React from 'react'
import IndianFlag from '../../images/indian-flag.png';
export default function PersonalInfo() {
    return (
        <div>
            <h4 className='title'>Personal Information</h4>
            <div className='row pt-3'>
                <div className='col-md-6 '>
                    <div className='form-group'>
                        <label>First name</label>
                        <input type='text' className="form-control" placeholder='First name' />
                    </div>
                </div>
                <div className='col-md-6 '>
                    <div className='form-group'>
                        <label>Last name</label>
                        <input type='text' className="form-control" placeholder='Last name' />
                    </div>
                </div>
                <div className='col-md-6 '>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email' className="form-control" placeholder='Email' />
                    </div>
                </div>
                <div className='col-md-6 '>
                    <div className='form-group'>
                        <label>Phone number</label>
                        <div className='position-relative'>
                            <span className='phone_NumCOuntry'><img src={IndianFlag} className="indianFlagImage" /></span>
                            <input type='number' className="form-control" placeholder='Phone number' style={{ paddingLeft: '50px' }} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
