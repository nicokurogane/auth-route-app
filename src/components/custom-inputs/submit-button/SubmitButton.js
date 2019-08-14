import React from 'react';

import './submit-button.scss';

const SubmitButton = ({ value }) => {
  return (
    <button type="submit" className="submit-button">
      {value}
    </button>
  );
};

export default SubmitButton;
