import React from 'react';

import './group-radio-buttons.scss';

class GroupRadioButtons extends React.Component {
  render() {
    const {
      input,
      title,
      values,
      meta: { touched, error }
    } = this.props;
    return (
      <div className="group-radio-buttons-container">
        <label className="title">{title}</label>
        <div className="input-container">
          {values.map(v => {
            const { value, text } = v;
            return (
              <>
                <span key={value}>
                  <label>{text}</label>
                  <input type="radio" {...input} value={value} />
                </span>
              </>
            );
          })}
          {touched && error && <span className="error">{error}</span>}
        </div>
      </div>
    );
  }
}

export default GroupRadioButtons;
