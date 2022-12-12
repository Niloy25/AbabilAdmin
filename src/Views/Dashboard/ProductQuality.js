import React from 'react'
import Ratingstats from './Ratingstats'

export default function ProductQuality() {
    return (
        <section className='first_SectionDashboard mb-4'>
            <div className='card'>
                <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h4 className='m-0 title_Section'>Product Quality</h4>
                        <div className='dropdownFIeld'>
                            <select className='form-control weeklysElect'>
                                <option value="">This week</option>
                            </select>
                        </div>
                    </div>



                    <div className='row  pt-4'>
                        <div className='col-md-6 p-0'>

                            <div className='row'>

                                <div className='col-md-12 col-lg-12 col-xl-6 pl-0 pl-xl-0 mb-xl-3 mb-4 customCOl'>
                                    <div className='cardTotal'>
                                        <h3 className='title_Dashboard'>Units sold</h3>
                                        <h2 className='price_Dashboard'>1,456</h2>
                                        <span className='percentage_Dashboard'><i class="fa-solid fa-arrow-trend-up transa_Icons_three"></i> Up by 15%  </span>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-12 col-xl-6 pl-0 pl-xl-0 mb-xl-3 mb-4 customCOl'>
                                    <div className='cardTotal'>
                                        <h3 className='title_Dashboard'>Cancellations</h3>
                                        <h2 className='price_Dashboard'>210</h2>
                                        <span className='percentage_Dashboard'><i class="fa-solid fa-arrow-trend-up transa_Icons_three"></i> Up by 7%  </span>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-12 col-xl-6 pl-0 pl-xl-0 mb-xl-3 mb-4 customCOl'>
                                    <div className='cardTotal'>
                                        <h3 className='title_Dashboard'>Returns</h3>
                                        <h2 className='price_Dashboard'>1,456</h2>
                                        <span className='percentage_Dashboard'><i class="fa-solid fa-arrow-trend-up transa_Icons_three"></i> Down by 8%</span>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-12 col-xl-6 pl-0 pl-xl-0 mb-xl-3 mb-4 customCOl'>
                                    <div className='cardTotal'>
                                        <h3 className='title_Dashboard'>Replacements</h3>
                                        <h2 className='price_Dashboard'>298</h2>
                                        <span className='percentage_Dashboard'><i class="fa-solid fa-arrow-trend-up transa_Icons_three"></i> Down by 10%</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='col-md-6 p-0'>

                            <Ratingstats />
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}
