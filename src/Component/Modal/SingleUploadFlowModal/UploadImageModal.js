import React, {useState} from 'react'
import Multistep from 'react-multistep';
import ImageUpload from './ImageUpload';
import BookDetails from "./BookDetails"
import Confirmation from './Confirmation';
export default function UploadImageModal(props) {

  const [image, setImage] = useState("")
  const [activeStep, setActiveStep] = useState(0)

  const handleClick = data => {
    setImage(data)
    console.log(data);
  }
    const steps = [
        { title: 'Upload image', component: <ImageUpload handleClick={handleClick} /> },
        { title: 'Book details', component: <BookDetails setActiveStep={setActiveStep} /> },
        { title: 'Confirmation', component: <Confirmation /> }
      ];
  return (
<>

<div className='multistepform'>
          <div className='stepsfrom'>
            <div className='close-btn' onClick={props.handleClickClose2}>X</div>
            <Multistep activeStep={activeStep} showNavigation={true} steps={steps} />
          </div>
        </div>
</>
  )
}
