import React from 'react'

export default function Sales() {
    return (
        <section className='first_SectionDashboard mb-4'>
            <div className='card'>
                <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h4 className='m-0 title_Section'>Sales</h4>
                        <div className='dropdownFIeld'>
                            <select className='form-control weeklysElect'>
                                <option value="">This week</option>
                            </select>
                        </div>
                    </div>
                    <div className='row pt-4'>

                        <div className='col-xl-3 col-lg-4 col-md-6 mb-4 pl-0 customCOl'>
                            <div className='cardTotal'>
                                <h3 className='title_Dashboard'>Total revenue</h3>
                                <h2 className='price_Dashboard'>₹ 5,789.00</h2>
                                <span className='percentage_Dashboard'><i class="fa-solid fa-arrow-trend-up transa_Icons_three"></i> Up by 5% </span>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-md-6 mb-4 pl-0 customCOl'>
                            <div className='cardTotal'>
                                <h3 className='title_Dashboard'>Commission paid</h3>
                                <h2 className='price_Dashboard'>₹ 689.00</h2>
                                <span className='percentage_Dashboard'><i class="fa-solid fa-arrow-trend-up transa_Icons_three"></i> Down by 9% </span>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-md-6 mb-4 pl-0 customCOl'>
                            <div className='cardTotal'>
                                <h3 className='title_Dashboard'>Payment yet to be received</h3>
                                <h2 className='price_Dashboard'>₹ 1,456.00</h2>
                                <button className='seeALlBTn'>See all</button>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-md-6 mb-4 pl-0 customCOl'>
                            <div className='cardTotal'>
                                <h3 className='title_Dashboard'>Refunded</h3>
                                <h2 className='price_Dashboard'>₹ 2,145.00</h2>
                                <span className='percentage_Dashboard'><i class="fa-solid fa-arrow-trend-up transa_Icons_three"></i> Down by 10%</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
