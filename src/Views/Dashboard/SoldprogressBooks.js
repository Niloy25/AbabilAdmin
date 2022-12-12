import React from 'react'

export default function SoldprogressBooks(props) {
    console.log(props);
    return (
        <div className='d-block d-sm-flex align-items-center justify-content-between mb-3'>
            <div className='progressTitle mb-3 mb-md-0'>
                <span>{props.title}</span>
            </div>

            <div class="progress main_progress mb-3 mb-md-0">
                <div class="progress-bar" role="progressbar" style={{ width: `${props.width}%` }} aria-valuenow={props.width} aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className='progressValue mb-3 mb-md-0'>
                <span>{props.progresText} ({props.width}%)</span>
            </div>
        </div>
    )
}
