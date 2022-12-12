import React from 'react'
import Crossicons from '../../images/close.png';

export default function SelectBooksModal(props) {
    return (
        <div className='selectbookmodal modal-part'>

            <div className='modal-content' style={{ position: 'relative' }}>
                <div className='d-flex align-items-center px-4 pt-4'>
                    <div>
                        <h4 className='sectionTitle'>Select books</h4>
                        <p className='paratitle'>Select the books you want to run offer on</p>
                    </div>
                    <div>
                        <button className="close-modal-part btn" onClick={props.onSelect} style={{ border: "0", position: 'absolute', top: '10px', right: '10px' }}>
                            <img src={Crossicons} className="img-fluid" />
                        </button>
                    </div>
                </div>
                <div className='d-sm-flex align-items-center justify-content-end px-4'>
                    <div className='d-flex align-items-center justify-content-end'>
                        <div className='position-relative inputCusotm'>
                            <input type="text" className="form-control " />
                            <i class="fa-solid fa-xmark crossicons"></i>
                        </div>
                        <button className='doneBtn'>Done</button>
                    </div>
                </div>

                <div className='table-responsive'>
                    <table className='table customTable'>
                        <thead>
                            <tr>
                                <th className='text-center'>Action</th>
                                <th>Book Name</th>
                                <th>Type</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Discount</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'><label htmlFor="chk"><input type='checkbox' className='checkForminput' id='chk' /></label></td>
                                <td>The Design Of Everyday Things</td>
                                <td>Hardcover Paperback</td>
                                <td>158</td>
                                <td>₹ 650.50</td>
                                <td><input type="text" className='form-control newInput'/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}
