import React from 'react';
import "./DirectRoute.scss";
import Close from "../../assets/icons/EX.svg"


const DirectRoute = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className='overlay'>
      <div className='modalContainer-1'>
        <div className="close_container">
          <div className='closeBtn' onClick={onClose}>
            <img src={Close} alt="close"/>
          </div>
        </div>
          <div className='content'>
            <p className="content-description">
            Thanks to its Helical engine, which utilizes the change in mass at relativistic speeds as its basis for operation,the Celeritas will get you to Mars in 12.5 minutes. You will fall asleep and wake up on The Red Planet.
            </p>
          </div>
      </div>
    </div>
  );
};

export default DirectRoute;