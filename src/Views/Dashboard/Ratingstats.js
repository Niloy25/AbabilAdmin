import React from 'react'
import RatingStatsProgress from './RatingStatsProgress'

export default function Ratingstats() {
    return (
        <div className='ratingStats'>
            <div className='ratingStatsInner'>
                <h2 className='mostTitle mb-4'>Rating Stats</h2>
                <RatingStatsProgress
                    rating={'5'}
                    width={'70'}
                    ratingnumber={'1048'}
                />
                <RatingStatsProgress
                    rating={'4'}
                    width={'50'}
                    ratingnumber={'896'}
                />
                <RatingStatsProgress
                    rating={'3'}
                    width={'35'}
                    ratingnumber={'567'}
                />
                <RatingStatsProgress
                    rating={'2'}
                    width={'25'}
                    ratingnumber={'234'}
                />
                <RatingStatsProgress
                    rating={'1'}
                    width={'10'}
                    ratingnumber={'78'}
                />
                <p className='des mt-3'>
                People are loving your product . You have <span className='markRate'>70% (5 star ratings)</span>. Keep  up the quality of your products.
                </p>
            </div>
        </div>
    )
}
