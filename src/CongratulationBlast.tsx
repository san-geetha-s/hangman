import React from 'react';
import './congratulation-blast.css';

// type CongratulationBlastProps = {
//   recipientName: string;
//   onClose: () => void;
// };

const CongratulationBlast: React.FC<CongratulationBlastProps> = ({ recipientName, onClose }) => {
  return (
    <div className="congratulation-blast">
      <div className="congratulation-blast__message">
        <h1>Congratulations </h1>
        <p>You won the game!</p>
      </div>
      {/* <button className="congratulation-blast__close-button" onClick={onClose}>
        Close
      </button> */}
    </div>
  );
};

export default CongratulationBlast;
