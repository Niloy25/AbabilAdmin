import React from 'react'
import ProductQuality from './ProductQuality'
import ProductStats from './ProductStats'
import Sales from './Sales'

export default function index() {
  return (
    <main className='enrollment'>
        <div className='container-fluid customCOntainerfluid'>
            <div className='dashboard_Section'>
              <div className='heading'>
                <h2 className='title'>Dashboard</h2>
                <p className='paraa'>See your sales and product stats</p>
              </div>
            </div>


            <Sales />

            <ProductQuality />

            <ProductStats />

        </div>
    </main>
  )
}
