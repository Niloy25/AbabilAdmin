import React from 'react';
import ProfileSidebar from '../../Component/ProfileSidebar/ProfileSidebar';
import PersonalInfo from './PersonalInfo';
import BusinessInfo from './BusinessInfo';
import AddressInfo from './AddressInfo';
import BankDetails from './BankDetails';
export default function index() {
  return (
    
    <main className='enrollment'>
        <div className='container-fluid customCOntainerfluid'>


            <div className='row mt-5'>
                <div className='col-md-12 col-lg-4 p-lg-0'>

                    <ProfileSidebar />
                   
                </div>


                <div className='col-md-12 col-lg-8'>


                    <div className='profileInfo'>
                        
                        <PersonalInfo />

                        <AddressInfo />

                        <BusinessInfo />

                        <BankDetails />

                    </div>









                </div>





            </div>






        </div>
    </main>





  )
}
