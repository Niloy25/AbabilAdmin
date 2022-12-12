import React from 'react'

export default function RatingStatsProgress(props) {
    return (
        <div className='d-block d-sm-flex align-items-center justify-content-start mb-3 mt-2'>
            <div className='progressTitle mb-3 mb-md-0'>
                <span>{props.rating} <i class="fa-solid fa-star"></i></span>
            </div>

            <div class="progress main_progress mb-3 mb-md-0">
                <div class="progress-bar" role="progressbar" style={{ width: `${props.width}%` }} aria-valuenow={props.width} aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className='progressValue mb-3 mb-md-0'>
                <span>{props.ratingnumber} ratings</span>
            </div>
        </div>
    )
}
