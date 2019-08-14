import React from 'react';

/*
 This component is used to pass to a Field component from Redux Form, renders  text field and passwords
*/
const InputText = ({ input, label, type, image, meta: { touched, error } }) => (
  <div className="control-field-container">
    <div className="field-container">
      <img src={image} alt="input field" className="image" />
      <input {...input} placeholder={label} type={type} className="input" />
    </div>
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default InputText;
