import React from 'react';
import { Field } from 'redux-form';

import './group-radio-buttons.scss';

const GroupRadioButtons = ({ title, name, values }) => {
  return (
    <div className="group-radio-buttons-container">
      <label className="title">{title}</label>
      <div className="input-container">
        {values.map(v => {
          const { value, text } = v;
          return (
            <>
              <label>
                <Field
                  name={name}
                  component="input"
                  type="radio"
                  value={value}
                />
                {text}
              </label>
              {/*touched && error && <span className="error">{error}</span>*/}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GroupRadioButtons;
