import React from 'react'
import Multistep from 'react-multistep';
import ImageUpload from './ImageUpload';
import BookDetails from "./BookDetails"
import Confirmation from './Confirmation';
export default function UploadImageModal(props) {
    const steps = [
        { title: 'Upload image', component: <ImageUpload /> },
        { title: 'Book details', component: <BookDetails /> },
        { title: 'Confirmation', component: <Confirmation /> }
      ];
  return (
<>

<div className='multistepform'>
          <div className='stepsfrom'>
            <div className='close-btn' onClick={props.handleClickClose2}>X</div>
            <Multistep activeStep={0} showNavigation={true} steps={steps} />
          </div>
        </div>
</>
  )
}
