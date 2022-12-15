import React from 'react'
import Multistep from 'react-multistep';
import EditImage from './EditImage';
import Editbookdetails from './Editbookdetails';
import Confirmation from './Confirmation';
function Multistepsmodal(props) {
  console.log("Mul", props.itemData);
    const steps = [
        { title: 'EditImage', component: <EditImage /> },
        { title: 'Edit book details', component: <Editbookdetails itemData={props.itemData} /> },
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

export default Multistepsmodal