import React from 'react'
import SoldprogressBooks from './SoldprogressBooks'

export default function ProductStats() {
    return (
        <section className='first_SectionDashboard mb-4'>
            <div className='card'>
                <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h4 className='m-0 title_Section'>Product Stats</h4>
                        <div className='dropdownFIeld'>
                            <select className='form-control weeklysElect'>
                                <option value="">This week</option>
                            </select>
                        </div>
                    </div>
                    <div className='row pt-4'>

                        <div className='col-md-6 pl-0 mb-4'>

                            <div className='mostSoldBookcards'>
                                    <h2 className='mostTitle mb-4'>Most sold books</h2>
                                <div className='mostSoldBookcardsInner'>
                                    {[1, 2, 3, 4].map((item, index) => {
                                        return (
                                            <>
                                                <div className='mostSoldBookCardsInnerInner'>
                                                    <div className='d-block d-sm-flex align-items-center justify-content-between mb-3'>
                                                        <h4 className='shormostTitle'>The Design Of Everyday Things</h4>
                                                        <span className='price'>₹ 1230.00 <span className='piece'> / piece</span></span>
                                                    </div>
                                                    <span className='captionpara'>By Donald A Norman</span>
                                                    <p>
                                                        <span className='format_Title'>Format  :  </span>
                                                        <span className='format_Value'>Hardcover</span>
                                                    </p>
                                                    <div className='d-block d-sm-flex align-items-center justify-content-start'>
                                                        <div className='earn mb-3'>
                                                            <h3 className='title_Total'>Total revenue</h3>
                                                            <span className='paid_Earn'>₹ 1,52,300.00</span>
                                                        </div>
                                                        <div className='earn mb-3'>
                                                            <h3 className='title_Total'>Commission paid</h3>
                                                            <span className='paid_Earn'>₹ 15,987.89</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='my-1' />
                                            </>
                                        )
                                    })}
                                </div>
                            </div>


                        </div>
                        <div className='col-md-6 pl-0 mb-4'>

                            <div className='mostSoldBookcards'>
                                <div className='mostSoldBookcardsInner'>
                                    <h2 className='mostTitle mb-4'>Most sold genres</h2>
                                    <div className='mostSoldBookCardsInnerInner'>

                                    <SoldprogressBooks
                                        title={'Horror'}
                                        width={'61'}
                                        progresText={'6100'}
                                    />
                                    <SoldprogressBooks
                                        title={'Comedy'}
                                        width={'10'}
                                        progresText={'6100'}
                                    />
                                    <SoldprogressBooks
                                        title={'Finance'}
                                        width={'61'}
                                        progresText={'2589'}
                                    />
                                    <SoldprogressBooks
                                        title={'Self help'}
                                        width={'25'}
                                        progresText={'2589'}
                                    />
                                    <SoldprogressBooks
                                        title={'Spiritual'}
                                        width={'44'}
                                        progresText={'2589'}
                                    />
                                    <SoldprogressBooks
                                        title={'Sci-Fi'}
                                        width={'55'}
                                        progresText={'2589'}
                                    />
                                    <SoldprogressBooks
                                        title={'Fiction'}
                                        width={'75'}
                                        progresText={'2589'}
                                    />
                                    <SoldprogressBooks
                                        title={'Action'}
                                        width={'89'}
                                        progresText={'2589'}
                                    />


                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
