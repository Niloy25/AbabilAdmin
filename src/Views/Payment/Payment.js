import React, { useState } from 'react'
import PaymentSlip from '../../Component/Modal/PaymentSlip'
function Payment() {
  const [payModal,setpayModal] = useState(false);
  const togglePaymentModal = () => {
    setpayModal(!payModal);
  }
  return (
    <>
    <div className='row'>
      <div className='col-xl-12 col-lg-12 col-md-12 col-12' style={{ padding: 0 }}>
        <div className='table-responsive'>
          <table className="table table-bordered" style={{ backgroundColor: "transparent" }}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Amount Received</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={togglePaymentModal}>
                <td>1</td>
                <td>1234567890129087</td>
                <td>24/10/2021</td>
                <td>650.50</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    {payModal && (
      <PaymentSlip onSelect={togglePaymentModal}/>
    )}
    </>
  )
}

export default Payment