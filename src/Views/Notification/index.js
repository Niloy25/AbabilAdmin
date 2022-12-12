import React from 'react'
import ProfileSidebar from '../../Component/ProfileSidebar/ProfileSidebar';
import NotificationSection from './NotificationSection';
export default function index() {
    
    return (
        <main className='enrollment'>
            <div className='container-fluid customCOntainerfluid'>


            <div className='notifications_Section'>
                <div className='row mt-5'>
                    <div className='col-md-12 col-lg-4 p-lg-0'>

                        <ProfileSidebar />
                    
                    </div>
                    <div className='col-md-12 col-lg-8'>


                        <section className='customCard'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h3 className='titleSection'>Notifications</h3>
                                <a href="" className='clearBtn'>Clear All</a>
                            </div>
                            <NotificationSection 
                            title={'Refund request approved'}
                            time={'Now'}
                            paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna, in habitant blandit vel quis amet sagittis convallis. Amet nulla vulputate purus ac volutpat. '}
                            />
                            <NotificationSection
                             title={'Offer approved'}
                             time={'1d ago'}
                             paragraph={'The book “The Design of everyday things” is now available with the disttributor . Order now before it gets out of stock'}
                            />
                            <NotificationSection 
                             title={'Your offer is now live'}
                             time={'1d ago'}
                             paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna, in habitant blandit vel quis amet sagittis convallis. Amet nulla vulputate purus ac volutpat. '}
                            />
                            
                        </section>




                    </div>


                </div>
            </div>




            </div>
        </main>
    )
}
