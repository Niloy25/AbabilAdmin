import React from 'react'
import Crossicons from '../../images/close.png';
import logopay from '../../images/logopay.png';
import uploadmodal from '../../images/uploadmodal.png';
export default function PaymentSlip(props) {
  return (
    <div className='paymentModal modal-part'>

      <div className='modal-content' style={{ position: 'relative' }}>
        <button className="close-modal-part btn text-right" onClick={props.onSelect} >
          <img src={Crossicons} className="img-fluid" />
        </button>
        <div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='row'>
                <div className='col-12'>
                  <span className='formTitle'>Transaction ID</span>
                  <p className='formValue'>1234567890123</p>
                </div>
                <div className='col-md-6'>
                  <span className='formTitle'>Invoice Date</span>
                  <p className='formValue'>24/10/2021</p>
                </div>
                <div className='col-md-6'>
                  <span className='formTitle'>Payment Due</span>
                  <p className='formValue'>31/10/2021</p>
                </div>
                <div className='col-md-6'>
                  <span className='formTitle'>Invoice for</span>
                  <p className='formValue'>Pragati Book Distributors</p>
                  <span className='address_TItle'>Postmaster, Post Office KOLKATA,
                    WEST BENGAL (WB), India (IN),
                    Pin Code:- 700001</span>
                </div>

              </div>
            </div>
            <div className='col-md-5'>
              <div className='right_Section '>
                <div className='d-flex align-items-center justify-content-start mb-2'>
                  <h4 className='right_Title mr-3'>Ababil Books</h4>
                  <div className='paylogoWi'>
                    <img src={logopay} className='img-fluid' />
                  </div>
                </div>
                <address className='address_TExt'>
                  Postmaster, Post Office
                  KOLKATA,
                  WEST BENGAL (WB),
                  India (IN),
                  Pin Code:- 700001
                </address>
              </div>
            </div>

            <div className='col-12'>
              <div className='table-responsive px-3'>
                <table className='table customTable'>
                  <thead>
                    <tr>
                      <th>Billing Breakup</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pragati Book Distributors</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i> 2400</td>
                    </tr>
                    <tr>
                      <td>GST (18%)</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i> 432</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>TOTAL</td>
                      <td><i class="fa-solid fa-indian-rupee-sign"></i> 2832</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className='col-12'>
              <div className='d-sm-flex align-items-center justify-content-between px-3'>
                <div>
                  <h4 className='lasttitle'>Status</h4>
                  <p className='pedingTitle'>Pending</p>
                </div>
                <div className='downloadInvoice'>
                  <button className='btn '><img src={uploadmodal} className="img-fluid" /> Download Invoice</button>
                </div>
              </div>
            </div>






          </div>
        </div>
      </div>
    </div>
  )
}
