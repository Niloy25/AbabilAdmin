import React, {useState} from 'react'
import Multistep from 'react-multistep';
import EditImage from './EditImage';
import Editbookdetails from './Editbookdetails';
import Confirmation from './Confirmation';

function Multistepsmodal(props) {
  const [activeStep, setActiveStep] = useState(0)
  console.log("Mul", props.itemData);
    const steps = [
        { title: 'EditImage', component: <EditImage /> },
        { title: 'Edit book details', component: <Editbookdetails itemData={props.itemData} setActiveStep={setActiveStep} /> },
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

export default Multistepsmodal