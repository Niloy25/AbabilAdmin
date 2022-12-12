import React from 'react'

export default function NotificationSection(props) {
    return (
        <div className='card customCardInner'>
            <div className='card-body'>
                <div className='d-flex align-items-center justify-content-between mb-2'>
                    <h3 className='cardTitle'>{props.title}</h3>
                    <span className='timing'>{props.time}</span>
                </div>
                <p className='paraDescription'>{props.paragraph}</p>
            </div>
        </div>
    )
}
