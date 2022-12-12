import React from 'react'
import Payment from './Payment'
function index() {
    return (
        <div className='enrollment'>
            <div className='container-fluid customCOntainerfluid'>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-12' style={{ padding: 0 }}>
                        <h1 className='enrty-title'>Payments</h1>
                    </div>
                </div>

                <Payment />

            </div>
        </div>
    )
}

export default index