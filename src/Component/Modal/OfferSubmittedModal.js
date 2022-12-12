import React from 'react'
import { Link } from 'react-router-dom';
import Crossicons from '../../images/close.png';
import offer from '../../images/offer.png';
export default function OfferSubmittedModal(props) {
    return (
        <div className='offersubmitModal modal-part'>

            <div className='modal-content' style={{ position: 'relative' }}>
                <div>
                    <img src={offer} className='img-fluid'/>
                    <h2 className='modaltitle'>Offer submitted</h2>
                    <p className='modalpara'>Your offer will reflect once it has been approved</p>
                    <Link to='/offerslist'>
                        <button className='modalbtn'>Go to offers</button>
                    </Link>
                    <button className="close-modal-part btn" onClick={props.onSelect} style={{ border: "0", position: 'absolute', top: '10px', right: '10px' }}>
                        <img src={Crossicons} className="img-fluid" />
                    </button>
                </div>
            </div>
        </div>
    )
}
